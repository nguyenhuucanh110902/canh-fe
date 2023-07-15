import { Header } from "./Header"
import { Footer } from "./Footer"
const Layout = ({children}) => {
    return <>
        <Header>

        </Header>

        <div>{children}</div>
       <Footer></Footer>
    </>
}

export {
    Layout
}