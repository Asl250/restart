import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = ( ) => {
	return (
		<div className={'mx-[10%] my-32'}>
			<h1 className={'w-full text-5xl text-center font-semibold mb-24'}> Eng Ko’p Beriladigan Savollar </h1>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1" className={'mb-5 border-[2px] rounded-lg p-3'}>
					<AccordionTrigger className={'text-2xl  max-md:text-lg max-sm:text-sm'}>497,000 so’mdan necha marta to’laymiz?</AccordionTrigger>
					<AccordionContent className={'text-lg max-md:text-sm'}>
						Bir marta 497,000 so’m to’laysiz va video darsliklarga 6 oylik dostupga ega bo’lasiz.
						<br/>
						Ushbu vaqt davomida darslarini bemalol qayta-qayta ko’rishingiz mumkin bo’ladi
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className={'mb-5 border-[2px] rounded-lg p-3'}>
					<AccordionTrigger className={'text-2xl max-md:text-lg max-sm:text-sm'}>Yangi darsliklar ham qo’shiladimi? </AccordionTrigger>
					<AccordionContent className={'text-lg max-md:text-sm'}>
						Ha! Har oyda bir marta qurilish oid kuchli spikerlarni chaqiramiz, ma’lumotlar olamiz
						<br/>
						Va ushbu ma’lumotlarni yopiq telegram kanalga yuklab boramiz.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className={'mb-5 border-[2px] rounded-lg p-3'}>
					<AccordionTrigger className={'text-2xl max-md:text-lg max-sm:text-sm'}>Barcha darslar darhol ochiladimi? </AccordionTrigger>
					<AccordionContent className={'text-lg max-md:text-sm'}>
						Ha! Yopiq telegram kanalga qo’shilishingiz bilanoq barcha darslarni ko’rish imkoniyatiga ega bo’lasiz
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4" className={'mb-5 border-[2px] rounded-lg p-3'}>
					<AccordionTrigger className={'text-2xl max-md:text-lg max-sm:text-sm'}>Bu darsliklardan qanday foyda olaman?</AccordionTrigger>
					<AccordionContent className={'text-lg max-md:text-sm'}>
						Ushbu darsliklar orqali ham ko’chmas mulk bo’yicha savodxonligingiz oshadi ham yuridik tomonlama maslahatlar beriladi.
						Va bu orqali millionlab pullaringizni tejab qolishingiz mumkin.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
export default FAQ
