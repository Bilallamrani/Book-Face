import { Routes, Route } from "react-router-dom"
import Followings from "./Components/Followings/Followings"
import people from "./Components/Followings/people"
import PostCard from "./Components/Postcard/Postcard"
import SideBar from "./Components/SideBar/SideBar"
import VCard from "./Components/VCard/VCard"
import LandingPage from './Pages/LandingPage'
import Register from "./Pages/Register"
import Login from "./Pages/Login"


import NatureCard from "./Components/GalleryCard/GalleryCard"
import NatureTrendCard from "./Components/NatureTrendCard/NatureTrendCard"
import Publication from "./Components/Publication/Publication"



export function routes() {
    return <Routes>
            <Route path='LandingPage/' element={<LandingPage />} />
            <Route path='SideBar/' element={<SideBar isOpen={true} />} />
            <Route path='/VCard' element={<VCard name="John Doe" username="johndoe" followers={1000} following={500} />} />
            <Route path='/Followings' element={<Followings suggestions={people} />} />
            <Route path='/post' element={<PostCard profilePictureUrl="https://randomuser.me/api/portraits/women/8.jpg" />} />
            <Route path='NatureCard/' element={<NatureCard />} />
            <Route path='NatureTrendCard/' element={<NatureTrendCard />} />
            <Route path='Publication/' element={<Publication data={{
            id: 0,
            author: {
                name: "John Doe",
                username: "johndoe",
                avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg"
            },
            content: "Ces services permettent de trouver les sources des photographies et donc de mieux comprendre les restrictions d’usage des images trouvées ici et là sur Internet. Dans tous les cas, méfiez-vous des images trop « parfaites » : généralement issues de banques d’images, leur utilisation est rarement gratuite !",
            imageUrl: undefined,
            videoUrl: undefined,
            postedAt: "",
            likes: 0,
            shares: 0,
            comments: 0
        }} />} />

        
       

            <Route path= '/Register' element={<Register/>} />
            <Route path= '/Login' element={<Login/>} />
          
        
    </Routes>
}
