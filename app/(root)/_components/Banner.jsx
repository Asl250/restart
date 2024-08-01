import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react';


const Banner = () => {
	return (
		<div className={'bg-[#db4034] w-full py-16'}>
			
			
			<div>
				<div className={'w-full text-center text-white p-3'}>
					<h1 className={'oswald text-8xl font-semibold text-center leading-normal pb-5'}>UY SOTIB OLISHDA <br/> ALDANIB QOLMANG!</h1>
					<p className={'mx-auto text-center text-2xl font-semibold'}>2024-yilda uy sotib olishdan oldin nimalarga e’tibor berishingiz kerak?</p>
					<Button className={'mt-24 bg-gradient-to-tr from-gray-800 to-gray-700 hover:bg-black w-[50%] py-16 xl:text-4xl lg:text-3xl md:text-2xl max-md:text-xl max-sm:text-lg uppercase'}>Hoziroq Darslikni olish</Button>
					<p className={'text-center text-2xl mt-7'}>Shoshiling! Joylar soni kam qoldi! </p>
					<div className={'w-full flex justify-center space-x-1 mt-3'}>
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[15px] h-[22px] bg-[#583c3b]'} />
						<div className={'w-[17px] h-[22px] bg-[#a2bc1e]'}><Check className={'w-4 pt-[1px] h-5'}/></div>
					
					</div>
				</div>
			
			</div>
		
		</div>
	
	)
}
export default Banner
