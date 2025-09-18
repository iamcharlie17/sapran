'use client'

import { CiSearch } from "react-icons/ci";
import sapranLogo from "../../assets/logos/Sapran.svg"
import Button from "../Buttons/Button";
import { useLang } from "@/providers/LangProvider";
const Header = () => {
    const { lang, setLang } = useLang();

    const handleLangChange = (lang) => {
        setLang(lang);
        localStorage.setItem('lang', lang);
    }

    return (
        <header className="flex justify-between items-center py-8 px-32 broder-b border border-primary">
            <div className="flex-1 text-primary space-y-2">
                <div>
                    <h1 className="font-bold">{lang === 'BN' ? 'সকল মানুষের নিরাপত্তা - সপ্রান' : 'SAFEGUARDING ALL LIVES - SAPRAN'}</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <h1>{lang === 'BN' ? 'যোগাযোগ করুন' : 'CONTACT US'}</h1>
                    <div className="flex items-center gap-1">
                        <CiSearch size={20} />
                        <h1>{lang === 'BN' ? 'অনুসন্ধান করুন' : 'SEARCH'}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-1">
                <img src={sapranLogo.src} alt="Sapran Logo" className="w-48" />
            </div>
            <div className="flex-1 flex justify-end">
                <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-4">
                        <h1 onClick={() => handleLangChange("EN")} className={`${lang == 'EN' ? 'text-secondary' : ''} cursor-pointer`}>ENGLISH</h1>
                        <h2 onClick={() => handleLangChange("BN")} className={`${lang == 'BN' ? 'text-secondary' : ''} cursor-pointer`}>বাংলা</h2>
                    </div>
                    <Button type="secondary" size="normal">{lang === 'BN' ? 'দান করুন' : 'DONATE NOW'}</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;