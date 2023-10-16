import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts';
import { About, Career, Contact, Home, Service } from './pages';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="career" element={<Career />} />
                    <Route path="service" element={<Service />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
