import LangProvider from "@/providers/LangProvider";
import Dashboard from "./components/Dashboard";

const page = () => {
    return (
        <div>
            <LangProvider><Dashboard /></LangProvider>
        </div>
    );
};

export default page;