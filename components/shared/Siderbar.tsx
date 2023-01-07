import Image from "next/image"


export const Siderbar = () => {
    return (
        <>
            <Image
                priority
                width={200}
                height={100}
                src={'/assets/img/logo.svg'}
                alt={ 'Logo Cafetería' }
            />
        </>
    )
}
