import { Button } from '@/components/ui/button'
import Image from 'next/image'
import day from '../../../public/day.jpg'

const Days = () => {
	return (
		<div className={'mx-[10%]'}>
			<h1 className={'w-full pt-10 text-center text-5xl font-semibold'}>
				<span className={'text-green-400'}>ЎЗИНГИЗ УЧУН 5 КУН АЖРАТИБ, {""} <br />   </span>
				ҲАЁТИНГИЗ ХАРИТАСИНИ ТУЗИБ ОЛИНГ
			</h1>
			<Image
				src={day}
				alt={'days'}
				width={500}
				height={500}
				className={'hidden max-lg:block mx-auto my-5'}
			/>
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-4xl text-green-400 font-semibold'}>1-КУН</p>
					<p className={'text-2xl text-white font-semibold mt-2'}>Сизга халақит бераётган шахсий ва
						ментал <br /> блокларни олиб ташлаймиз</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-3'}>
						<p>Ментал чегараларни олиб ташлаш:</p>
						<p>• Ўзингизга бўлган ишончингизни оширишга</p>
						<p>• Шахс сифатида ўсишингизга</p>
						<p>• Ва хаётга бўлган иштиёқингизни қайтаришга ёрдам беради.</p>
						<p>• Бу орқали сиз исталган мақсадларингизга эришишни бошлайсиз;</p>
						<p>• Ва ўзингиз ҳавас қиладигандек бахтли ва тартибли ҳаёт кечирасиз</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-4xl text-green-400 font-semibold'}>2-КУН</p>
					<p className={'text-2xl text-white font-semibold mt-2'}>Сизга халақит бераётган шахсий ва
						ментал <br /> блокларни олиб ташлаймиз</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-3'}>
						<p>Ментал чегараларни олиб ташлаш:</p>
						<p>• Ўзингизга бўлган ишончингизни оширишга</p>
						<p>• Шахс сифатида ўсишингизга</p>
						<p>• Ва хаётга бўлган иштиёқингизни қайтаришга ёрдам беради.</p>
						<p>• Бу орқали сиз исталган мақсадларингизга эришишни бошлайсиз;</p>
						<p>• Ва ўзингиз ҳавас қиладигандек бахтли ва тартибли ҳаёт кечирасиз</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-4xl text-green-400 font-semibold'}>3-КУН</p>
					<p className={'text-2xl text-white font-semibold mt-2'}>Сизга халақит бераётган шахсий ва
						ментал <br /> блокларни олиб ташлаймиз</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-3'}>
						<p>Ментал чегараларни олиб ташлаш:</p>
						<p>• Ўзингизга бўлган ишончингизни оширишга</p>
						<p>• Шахс сифатида ўсишингизга</p>
						<p>• Ва хаётга бўлган иштиёқингизни қайтаришга ёрдам беради.</p>
						<p>• Бу орқали сиз исталган мақсадларингизга эришишни бошлайсиз;</p>
						<p>• Ва ўзингиз ҳавас қиладигандек бахтли ва тартибли ҳаёт кечирасиз</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-4xl text-green-400 font-semibold'}>4-КУН</p>
					<p className={'text-2xl text-white font-semibold mt-2'}>Сизга халақит бераётган шахсий ва
						ментал <br /> блокларни олиб ташлаймиз</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-3'}>
						<p>Ментал чегараларни олиб ташлаш:</p>
						<p>• Ўзингизга бўлган ишончингизни оширишга</p>
						<p>• Шахс сифатида ўсишингизга</p>
						<p>• Ва хаётга бўлган иштиёқингизни қайтаришга ёрдам беради.</p>
						<p>• Бу орқали сиз исталган мақсадларингизга эришишни бошлайсиз;</p>
						<p>• Ва ўзингиз ҳавас қиладигандек бахтли ва тартибли ҳаёт кечирасиз</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className={'w-full rounded-[50px] rounded-b-none bg-[#141522] p-5 mt-10'}>
					<p className={'text-4xl text-green-400 font-semibold'}>5-КУН</p>
					<p className={'text-2xl text-white font-semibold mt-2'}>Сизга халақит бераётган шахсий ва
						ментал <br /> блокларни олиб ташлаймиз</p>
				</div>
				<div className={'lg:grid lg:grid-cols-2 mt-5 lg:gap-10'}>
					<div className={'text-2xl space-y-3'}>
						<p>Ментал чегараларни олиб ташлаш:</p>
						<p>• Ўзингизга бўлган ишончингизни оширишга</p>
						<p>• Шахс сифатида ўсишингизга</p>
						<p>• Ва хаётга бўлган иштиёқингизни қайтаришга ёрдам беради.</p>
						<p>• Бу орқали сиз исталган мақсадларингизга эришишни бошлайсиз;</p>
						<p>• Ва ўзингиз ҳавас қиладигандек бахтли ва тартибли ҳаёт кечирасиз</p>
						<div className={'justify-center mt-5 hidden max-lg:flex'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
					<div className={'max-lg:hidden'}>
						<Image
							src={day}
							alt={'days'}
							width={500}
							height={500}
							className={''}
						/>
						<div className={'justify-center mt-5'}>
							<Button
								className={'mx-auto justify-center bg-green-500 text-xl rounded-xl px-[12rem] py-8'}>Ishtirok
								etish
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Days
