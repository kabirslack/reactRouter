import Menu from "./Menu"
export default function MainLayout ({children}) {
    return (
        <div>
            <Menu />
            <div>{children}</div>      
               
        </div>
    )
}