import { Header } from "./Header"
import { Footer } from "./Footer"
const UserLayout = ({children}) => {
    return <>
        <Header>

        </Header>

        <div>{children}</div>
       <Footer></Footer>
    </>
}

export {
    UserLayout
}