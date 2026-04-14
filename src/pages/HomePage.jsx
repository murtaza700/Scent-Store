import React, { lazy } from 'react'
import HeroSection from '../components/HeroSection';

const ProductsSection = lazy(() => import('../components/ProductsSection'));

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ProductsSection />
        </>
    )
}

export default HomePage