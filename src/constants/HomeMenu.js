import DataPribadiIllustration from "assets/illustrations/DataPribadiIllustration.svg";
import KontakAkunIllustration from "assets/illustrations/KontakAkunIllustration.svg";
import PendidikanIllustration from "assets/illustrations/PendidikanIllustration.svg";
import MutasiIllustration from "assets/illustrations/MutasiIllustration.svg";
import CutiIllustration from "assets/illustrations/CutiIllustration.svg";
import LamaranIllustration from "assets/illustrations/LamaranIllustration.svg";

const HomeMenu = [
	{ illustration: <DataPribadiIllustration width={80} height={80} />, text: "Data Pribadi", screen: "DataPribadi" },
	{ illustration: <KontakAkunIllustration width={80} height={80} />, text: "Kontak & Akun", screen: "KontakAkun" },
	{ illustration: <PendidikanIllustration width={80} height={80} />, text: "Pendidikan", screen: "Pendidikan" },
	{ illustration: <MutasiIllustration width={80} height={80} />, text: "Mutasi", screen: "Mutasi" },
	{ illustration: <CutiIllustration width={80} height={80} />, text: "Cuti", screen: "Cuti" },
	{ illustration: <LamaranIllustration width={80} height={80} />, text: "Lamaran", screen: "Lamaran" },
];

export default HomeMenu;
