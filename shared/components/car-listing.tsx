import Link from "next/link";
import Car from "./car";
import { breakDataIntoChunks, transformUrl } from "./helper";
import styles from '../../styles/components/car-listing.module.scss'

import carStyles from "../../styles/components/car.module.scss";


export const AllCarsListings = ({ allCarsData }: any) => {
    let chunkedData = breakDataIntoChunks({ dataToChunk: allCarsData.result, chunkSize: 3, sizeOfData: allCarsData.result.length });
  
    return (
      <div className={styles.cars_show_wrap}>
        <div className={styles.heading_text}>Available Cars</div>
        <div className={styles.cars_card}>
            <span className={styles.view_all}> <Link href="/cars">View Al</Link>l</span>
  
            <div className={styles.allcars_list}>
                {
                chunkedData[0]?.map((car: any, index: any) => {
                    return (
                        // <Link
                        //     href={transformUrl({
                        //     urlPrefix: "/cars",
                        //     urlToTransform: car.websiteUrl,
                        //     urlSplitter: "/car"
                        //     })}
                        //     key={index}>
                        //     <a className={carStyles.car_item}>
                                <Car
                                    showTag={index == 1 || index == 2}
                                    cardCta="Add to Cart"
                                    carInfo={car}
                                    urlPrefix="/cars"
                                    urlSplitter="/car"
                                    key={index}
                                />
                        //      </a>
                        //   </Link>
                    )})
                }
            </div>
        </div>
        {/* <div className={styles.view_more_cars}>
          <Link href="/cars">
            <a>More Car deals &gt;&gt;</a>
          </Link>
        </div> */}
  
      </div>
    )
  }
  
export const PopularMakesListings = ({ allCarMakes }: any) => {
    console.log('makes', allCarMakes)
    let chunkedData = breakDataIntoChunks({ dataToChunk: allCarMakes, chunkSize: 3, sizeOfData: allCarMakes.length });
    return (
      <div className="popular_cars_list_wrap">
  
        <div className="cars_show_wrap">
  
          {
            chunkedData.map((eachChunk, idx) => {
              return (
                <div className={styles.cars_card} key={idx}>
  
                  <div className={styles.allcars_list}>
                    {
                      eachChunk.map((car: any, index: any) => {
                        return (
                          <Car
                            carInfo={car}
                            isBrandCard={true}
                            key={index}
                          />
                        )})
                    }
                  </div>
                </div>
              )})
          }
        </div>
      </div>
    )
  }