import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./gallery'), {
    ssr: false
})

export default function Carousel() {
    return (
        <DynamicComponentWithNoSSR />
    )
}