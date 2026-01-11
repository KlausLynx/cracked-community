import { ArrowBigRight, UserRound, CircleUserRoundIcon } from "lucide-react"
import { Link } from "react-router-dom"
export default function LandingPage() {
    return (
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-screen">
            <div className="bg-indigo-800">

            </div>
            <div className="md:pl-6 pr-2 flex flex-col"> 
                <div className="flex justify-end pt-2">
                     <p>Already have an Account <Link to="/Login.jsx"><strong>Login Here</strong></Link></p>
                </div>
               
                <div className="max-w-[460px] p-4 flex flex-col flex-1 gap-7 items-start justify-center">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold">Join Us!</h1>
                        <p className="text-md text-lg text-gray-400 font-bold">To begin this Journey, tell us how<br/> you plan to start</p>
                    </div>

                    <form action="" className="flex flex-col gap-y-10 w-full">
                        <div className="flex items-center gap-3 border-2 border-indigo-800 px-4 py-3 rounded-2xl">
                            <UserRound className="text-indigo-600" size={40} />
                            <div className="max-w-[305px] flex-1">
                                <p className="text-gray-400 font-medium" >New here? Sign up to start accessing</p>
                            </div>
                            <Link to="/src/Signup.jsx"><ArrowBigRight className="text-indigo-600" /></Link>   
                        </div>

                        <div className="flex items-center gap-3 border-2 border-indigo-800 px-4 py-3 rounded-2xl">
                            <CircleUserRoundIcon className="text-indigo-600" size={40} />
                           <div className="max-w-[305px] flex-1">
                            <p className="text-gray-400 font-medium">Already have access? Log into your secure account to view your saved materials.</p>
                           </div>
                            <Link to="/src/Login.jsx"><ArrowBigRight className="text-indigo-600" /></Link>   
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}