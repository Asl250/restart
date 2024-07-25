import Banner from '@/app/(root)/_components/Banner'
import { Button } from '@/components/ui/button'

const Another = () => {
	return (
		<div className={'bg-[#141522] text-white '}>
			<div className={'mx-[15%]'}>
				<h1 className={'w-full pt-10 text-center text-5xl font-semibold'}>
					<span className={'text-green-400'}>РEСТАРТ {""}</span>
					-ШУНЧАКИ ТРEЙНИНГ ЭМАС, ҲАЁТИНГИЗ КОМПАСИ
				</h1>
				<div className={'grid grid-cols-2 mt-8 gap-1'}>
					<div className={'space-y-3'}>
						<Button
							className={'w-full bg-green-400 py-14 text-4xl max-xl:text-2xl max-lg:text-xl max-md:text-lg font-semibold'}>РEСТАРТ</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm font-semibold'}>
							<p className={'max-md:max-w-xs'}>Муваффақиятли<br /> бизнесменларга <br /> энди
								нима <br /> қилишни ўргатади</p></Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm font-semibold'}>Катта
							тадбиркорларга <br /> янада<br /> катта бўлишни<br /> ўргатади</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm font-semibold'}>Тўғри
							ишлаш <br /> билан
							бирга<br /> ТЎҒРИ ЯШАШНИ <br /> ўргатади</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm font-semibold'}>Билим
							беради <br /> ва
							ТАТБИҚ <br /> ҚИЛДИРАДИ</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm font-semibold'}>Иш/бизнес
							ҳаётнинг <br />
							1/6 қисми. <br /> ҲАËТнинг бошқа <br />жабҳалари КАШФ ҚИЛАСИЗ</Button>
					
					</div>
					<div className={'space-y-3'}>
						<Button
							className={'w-full bg-green-400 py-14 text-4xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm font-semibold'}>БОШҚА
							КОАЧИНГЛАР</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm '}>Муваффақиятли
							бизнес <br /> бошлашни ўргатади</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm '}>Катта
							тадбиркор <br /> бўлишни ўргатади</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm '}>Тўғри
							ишлашни <br /> ўргатади</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm '}>Билим
							беради</Button>
						<Button
							className={'text-black w-full bg-white py-14 xl:text-xl lg:text-lg md:text-md max-md:text-sm '}>Фақат
							бир соҳага <br />(масалан бизнесга)<br /> йўналтирилган бўлад</Button>
					
					</div>
				</div>
			
			</div>
			<div className={'flex justify-center mt-16 pb-16'}>
				<Button className={'mx-auto justify-center bg-green-500 text-xl rounded-full px-[10rem] py-8'}>Ishtirok
					etish</Button>
			</div>
		</div>
	)
}
export default Another
