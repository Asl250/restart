import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '/public/logo.png'
import banner from '/public/banner.png'
import star from '/public/star.svg'


const Banner = () => {
	return (
		<div className={'bg-black w-full py-16'}>
			
			
			<div>
				<div className={'w-full text-center text-white mb-[17rem]'}>
					<h1 className={'text-[#feebbd] text-6xl oswald font-[74px] text-center leading-normal pb-5'}>UY SOTIB OLISHDA <br/> ALDANIB QOLMANG!</h1>
					<p className={'border-[3px] rounded-xl p-5 border-[#feebbd] w-[45%] max-lg:w-[80%] mx-auto text-center text-lg max-xl:justify-center px-5'}>2024-yilda uy sotib olishdan oldin nimalarga e’tibor berishingiz kerak? <br className={'md:block hidden'}/> Quyidagi videoni ko’ring va batafsil bilib oling.</p>
				</div>
				
			</div>
		
		</div>
	
	)
}
export default Banner
