import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface propsType {
  dailog: string;
  title: string;
  description: string;
}

export default function Alert({ dailog, title, description }: propsType) {
  return (
    <main>
      <AlertDialog>
        <AlertDialogTrigger>{dailog}</AlertDialogTrigger>
        <AlertDialogContent className="bg-gradient-to-r from-pink-500 to-purple-500">
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Cancel</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
