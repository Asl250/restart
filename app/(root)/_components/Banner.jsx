import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react';

import Image from 'next/image'


const Banner = () => {
	return (
		<div className={'bg-[#db4034] w-full py-16'}>
			
			<div>
				<div className={'w-full text-center text-white p-3'}>
					<h1 className={'poppins max-md:text-4xl text-8xl font-[91.2px] text-center leading-normal pb-5'}>UY SOTIB OLISHDA <br/> ALDANIB QOLMANG!</h1>
					<p className={'mx-auto text-center inter font-[24px] max-md:text-lg text-2xl'}>2024-yilda uy sotib olishdan oldin nimalarga e’tibor berishingiz kerak?</p>
					<Button className={'mt-24 bg-gradient-to-tr from-gray-800 to-gray-700 hover:bg-black w-[50%] py-16 max-md:py-10 xl:text-4xl lg:text-3xl md:text-2xl max-md:text-xl max-sm:text-sm uppercase'}>Hoziroq Darslikni olish</Button>
					<p className={'text-center max-md:text-lg text-2xl mt-7 inter font-[17px]'}>Shoshiling! Joylar soni kam qoldi! </p>
					<div className={'w-full flex justify-center space-x-1 mt-3'}>
						<Image src={'/check.gif'} alt={'d'} width={500} height={100}/>
					
					
					</div>
				</div>
			
			</div>
		
		</div>
	
	)
}
export default Banner
