import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { PengajuanCutiSchema } from "helpers/Validations";
import { postPengajuanCuti } from "helpers/api/PegawaiApi";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { useSelector } from "react-redux";
import { PegawaiSelector } from "states/slices/PegawaiSlice";

// Styles & Icons
import { FilePlus } from "lucide-react-native";
import { Button, Flex, Icon, ScrollView, VStack, ZStack, useToast } from "native-base";

// Components
import BaseAlert from "components/alerts/BaseAlert";
import PengajuanCutiForm from "components/forms/PengajuanCutiForm";
import BaseStagger from "components/staggers/BaseStagger";

export default function PengajuanCuti() {
	const [loading, setLoading] = useState(false);
	const { pegawai } = useSelector(PegawaiSelector.pegawai);
	const toast = useToast();
	const navigation = useNavigation();

	// Form
	const resolver = yupResolver(PengajuanCutiSchema);
	const mainForm = useForm({ resolver, mode: "onChange" });

	const onAjukan = async (data) => {
		Keyboard.dismiss();
		setLoading(true);
		clearTimeout();
		try {
			await postPengajuanCuti({ ...data, nipPegawai: pegawai?.nip });
			toast.show({
				placement: "top",
				duration: 3000,
				render: ({ id }) => (
					<BaseAlert
						props={{
							toast,
							id,
							status: "success",
							variant: "left-accent",
							title: "Pengajuan Cuti Berhasil!",
							description: "Cuti telah diajukan.",
							isCloseable: true,
						}}
					/>
				),
			});
			setTimeout(() => {
				mainForm.reset();
				navigation.goBack();
			}, 3000);
		} catch (err) {
			toast.show({
				placement: "top",
				duration: 3000,
				render: ({ id }) => (
					<BaseAlert
						props={{
							toast,
							id,
							status: "error",
							variant: "left-accent",
							title: "Pengajuan Cuti Gagal!",
							description: "Cuti gagal diajukan.",
							isCloseable: true,
						}}
					/>
				),
			});
			setLoading(false);
		}
	};

	return (
		<Flex bg='trueGray.100' h='full' _dark={{ bg: "trueGray.900" }}>
			<ZStack justifyContent='flex-end' h='full'>
				<ScrollView h='full' w='full'>
					<VStack h='full' space={8} p={8}>
						<FormProvider {...mainForm}>
							<PengajuanCutiForm />
						</FormProvider>
						<Button
							isLoading={loading}
							isLoadingText='Memproses'
							size='lg'
							colorScheme='cyan'
							leftIcon={<Icon as={<FilePlus size={20} />} mr={2} />}
							rounded='md'
							_text={{ fontWeight: "semibold" }}
							_spinner={{ height: 5 }}
							onPress={mainForm.handleSubmit(onAjukan)}
						>
							Ajukan
						</Button>
					</VStack>
				</ScrollView>
				<BaseStagger />
			</ZStack>
		</Flex>
	);
}
