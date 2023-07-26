import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import NavigationMain from './navigation-main';

export default function NavigationMobile() {
	return (
		<nav className='flex md:hidden p-4 justify-between'>
			<Sheet>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent side='left'>
					<NavigationMain />
				</SheetContent>
			</Sheet>
		</nav>
	);
}
