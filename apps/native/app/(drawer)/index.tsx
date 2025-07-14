import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Container } from "@/components/container";
import { SignIn } from "@/components/sign-in";
import { SignUp } from "@/components/sign-up";
import { authClient } from "@/lib/auth";

export default function Home() {
	const { data: session } = authClient.useSession();
	return (
		<Container>
			<ScrollView showsVerticalScrollIndicator={false} className="flex-1">
				<Text className="mb-4 font-bold font-mono text-3xl text-foreground">
					SMEDREC
				</Text>
				{session?.user ? (
					<View className="mb-6 rounded-lg border border-border bg-card p-4">
						<View className="mb-2 flex-row items-center justify-between">
							<Text className="text-base text-foreground">
								Welcome,{" "}
								<Text className="font-medium">{session.user.name}</Text>
							</Text>
						</View>
						<Text className="mb-4 text-muted-foreground text-sm">
							{session.user.email}
						</Text>

						<TouchableOpacity
							className="self-start rounded-md bg-destructive px-4 py-2"
							onPress={() => {
								void authClient.signOut();
							}}
						>
							<Text className="font-medium text-white">Sign Out</Text>
						</TouchableOpacity>
					</View>
				) : null}
				<View className="mb-6 rounded-xl border border-border bg-card p-6 shadow-sm" />
				{!session?.user && (
					<>
						<SignIn />
						<SignUp />
					</>
				)}
			</ScrollView>
		</Container>
	);
}
