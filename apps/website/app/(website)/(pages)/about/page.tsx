import Card from "@/components/Card/card";
import { Content } from "@/components/Content";
import { Metadata } from "next";
import { Title } from "@/components/Content/TitleHeading";

export const metadata: Metadata = {
	title: "About - Advice On Fire",
};

const About = async () => {
	return (
		// TODO: Remove redundant div once NextJs fixes inserted divs
		<main>
			<Card className={`h-full px-2 pb-4 pt-2`}>
				<Content>
					<Title>About</Title>
					<p>
						I was born into a pile of identities: Girl, White,
						American, Minnesotan, and Mormon. Throughout my life,
						more labels collected: “A” student, Swimmer, Lifeguard,
						Swim Teacher, Bank Teller, High School Graduate,
						Missionary, Spanish Teacher, College Dropout, Certified
						Personal Trainer, Wife, Homeschool Mom, Apostate, Single
						Mom.
					</p>
					<p>
						Which labels do you carry? Were they assigned to you, or
						did you choose them? What good are they to you?
					</p>
					<p>
						I know a man who has such tiny ears that you’d imagine
						he’d been teased about them at some point. He has.
						However, he was teased about how big they were
						(presumably many, many years ago when his head was much
						smaller.) So, now he is a man with tiny ears who is
						embarrassed at “how large” his ears are.
					</p>
					<p>
						This shows how a label, even if accurate at the time it
						was assigned, can get stuck and warp one’s “reality.”
					</p>
					<p>
						I discovered my own labeling mistake after gliding
						through life- letting decisions make themselves for me
						based on who I had convinced myself I was. By the time I
						fully realized my error, I was a 40-something mother of
						3, about to ask for a divorce.
					</p>
					<p>
						20 years earlier, I went to college subconsciously
						working toward my “MRS” degree. I found a “good Mormon
						boy” to marry and then made as many Mormon babies as I
						could before my body rebelled in a formidable way. No
						longer able to make babies, I focused nearly exclusively
						on raising them.
					</p>
					<p>
						I have been a Wife for 19 years, and it might hit 20
						before this divorce is final. Life has been great, but I
						DIDN’T CHOOSE IT! My life chose me based on prescribed
						ideals that I had never questioned. Please don’t make
						the same mistake- don’t defer to the default. I am
						writing this blog to help you design your life.
					</p>
					<p>
						About a year ago, I discovered the FIRE movement. It
						stands for Financial Independence/Retire Early. It
						sounds like it’s all about money, but it’s not really.
						You see, money is how we exchange our life energy. So,
						money is basically just a measurement unit that shows
						what we value. I learned this from Vicki Robin’s classic
						book, Your Money Or Your Life. I highly recommend it.
					</p>
					<p>
						Things are changing. I make my own decisions now, based
						on the things I value most. You’ll learn my values if
						you read this blog, but we can start out by saying that
						I value love, tolerance, equality, generosity, and
						thrift. Please join me on this journey of self-discovery
						and life optimization. I am so excited to see what the
						future brings.
					</p>
				</Content>
			</Card>
		</main>
	);
};

export default About;
