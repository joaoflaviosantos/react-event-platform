import { Link } from "react-router-dom"
import Logo from "../components/micro/Logo"

export default function Subscribe() {

  return (
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        {/*<Link to={'/event'}>
          Hello!
        </Link>*/}
        <div className="w-full max-w-[1200px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leadin-tight">
            Build a <strong className="text-blue-500">complete application</strong> from scratch with <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master in practice one of the most used technologies and with high demand to access the best opportunities on the market.
          </p>
        </div>

        <div className="min-w-[400px] p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Subscribe for free
          </strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="text" 
            placeholder="Your full name" 
            />
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="email" 
            placeholder="Your best e-mail" 
            />
            
            <button 
            type="submit"
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              <Link to={'/event'}>
                Let's go!
              </Link>
            </button>
          </form>
        </div>
        </div>

        <img src="/src/assets/code-mockup.png" className="mt-10" alt=""/>
      </div>
  )
}
