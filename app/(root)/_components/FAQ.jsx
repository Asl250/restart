import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const FAQ = ( ) => {
	return (
		<div className={'my-[50px] inter'}>
			<h1 className={'w-full text-4xl text-center font-semibold mb-14'}> Eng Ko’p Beriladigan Savollar </h1>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1"
				               className={'mb-5 border-[2px] rounded-lg p-3 max-md:mx-5 md:w-[70%] mx-auto max-md:w-[90%]'}>
					<AccordionTrigger className={'text-lg text-start max-md:text-lg max-sm:text-lg'}>497,000 so’mdan
						necha marta to’laymiz?</AccordionTrigger>
					<AccordionContent className={'text-lg'}>
						Bir marta 497,000 so’m to’laysiz va video darsliklarga 6 oylik dostupga ega bo’lasiz.
						<br />
						<br />
						Ushbu vaqt davomida darslarini bemalol qayta-qayta ko’rishingiz mumkin bo’ladi
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2"
				               className={'mb-5  border-[2px] rounded-lg p-3 max-md:mx-5 md:w-[70%] mx-auto max-md:w-[90%]'}>
					<AccordionTrigger className={'text-lg text-start max-md:text-lg max-sm:text-lg'}>Yangi darsliklar
						ham qo’shiladimi? </AccordionTrigger>
					<AccordionContent className={'text-lg '}>
						Ha! Har oyda bir marta qurilish oid kuchli spikerlarni chaqiramiz, ma’lumotlar olamiz
						<br />
						<br />
						Va ushbu ma’lumotlarni yopiq telegram kanalga yuklab boramiz.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3"
				               className={'mb-5 border-[2px] rounded-lg p-3 max-md:mx-5 md:w-[70%] mx-auto max-md:w-[90%]'}>
					<AccordionTrigger className={'text-lg max-md:text-lg max-sm:text-lg text-start'}>Barcha darslar
						darhol ochiladimi? </AccordionTrigger>
					<AccordionContent className={'text-lg max-md:text-lg'}>
						Ha! Yopiq telegram kanalga qo’shilishingiz bilanoq barcha darslarni ko’rish imkoniyatiga ega
						bo’lasiz
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4"
				               className={'mb-5 border-[2px] rounded-lg p-3 md:w-[70%] mx-auto max-md:w-[90%]'}>
					<AccordionTrigger className={'text-lg max-md:text-lg max-sm:text-lg text-start'}>Bu darsliklardan
						qanday foyda olaman?</AccordionTrigger>
					<AccordionContent className={'text-lg'}>
						Ushbu darsliklar orqali ham ko’chmas mulk bo’yicha savodxonligingiz oshadi ham yuridik tomonlama
						maslahatlar beriladi.
						<br />
						<br />
						Va bu orqali millionlab pullaringizni tejab qolishingiz mumkin.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
export default FAQ
