import { ChapterContextProvider } from "../../../contexts/chapter"

export const metadata = {
    title: 'Đọc truyện trộm tại NetTrom',
    description: 'Generated by create next app',
    other: {
        referrer: "same-origin"
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ChapterContextProvider>
            <div className="row">
                <div className="full-width col-sm-12">
                    {children}
                </div>
            </div>
        </ChapterContextProvider>
    )
}
