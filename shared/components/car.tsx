import Link from "next/link"
import React, { useEffect } from "react"
import Image from 'next/image'
import { toBase64, shimmerPreload, transformUrl } from "./helper"
import styles from '../../styles/components/car.module.scss'
import PlaceImg from '../../public/images/lazy-load.jpeg'

interface carProps {
    carInfo: any
    isBrandCard?: boolean
    showTag?: boolean
    cardCta?:string
    urlPrefix?: string|undefined
    urlSplitter?:string|undefined
}


const Car = ({ carInfo, isBrandCard, showTag, cardCta, urlSplitter="", urlPrefix="" }: carProps) => {
    const [srcImg, setSrc] = React.useState(carInfo.imageUrl);
    useEffect(() => {
        setSrc(srcImg);
    }, [srcImg]);
    
    return (
        <div className={styles.car_item}>
            {showTag &&
                <span 
                    className={`${styles.card_tag}`}>
                    New
                </span>
            }
            <div>
                <div className={styles.car_image}>
                    <Image
                        alt={isBrandCard ? carInfo.name : carInfo.title}
                        src={srcImg || PlaceImg}
                        width={150}
                        height={100}
                        placeholder="blur"
                        onLoadingComplete={(result) => {
                            if (result.naturalWidth === 0) {
                                // Broken image
                                setSrc(PlaceImg);
                            }
                        }}
                        onError={() => setSrc(PlaceImg)}
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmerPreload(700, 475))}`}
                    />
                    {
                    (!isBrandCard) &&
                        <div className={styles.view_details_overlay}>
                            <div className="overlay_body">
                                <Link 
                                href={{pathname: transformUrl({urlPrefix, urlToTransform: carInfo.websiteUrl,urlSplitter})}}>
                                    <a className={`btn ${styles.view_details}`}>View details</a>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
                
                {
                    carInfo.title &&
                    <div className={styles.car_info}>
                        {carInfo.title &&
                            <div className={styles.car_name}>
                                {carInfo.title}
                            </div>
                        }

                        {
                            !isBrandCard &&
                            <div>

                                <div className={styles.car_price}>
                                    &#x20A6;{carInfo.marketplacePrice.toLocaleString("en-ng")}
                                    <span className={styles.car_old_price}>
                                        &#x20A6;{carInfo.marketplaceOldPrice.toLocaleString("en-ng")}
                                    </span>
                                </div>
                                <button type="button" className={`btn ${styles.buy_now}`}>
                                    {cardCta}
                                </button>
                            </div>
                        }

                    </div>
                }
            </div>
        </div>
    )
}

export default Car;

