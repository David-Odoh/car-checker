import { ReactNode } from 'react';
import Link from 'next/link'
import Head from 'next/head'
// import Pagination from '@etchteam/next-pagination'

import styles from "../../styles/Home.module.scss"
import styles3 from "../../styles/components/pagination.module.scss"
import carStyles from "../../styles/components/car.module.scss";

import Car from '../../shared/components/car';
import { getAllCars, getCarMakes } from '../../shared/services/car_services';
import { breakDataIntoChunks, transformUrl } from '../../shared/components/helper';


const AllCarsListings = ({ allCarsData }: any) => {
  let chunkedData = breakDataIntoChunks({ dataToChunk: allCarsData, chunkSize: 3, sizeOfData: allCarsData.length });

  return (
    <div className={styles.cars_show_wrap}>
      <div className={`${styles.heading_text} ${styles.to_left}`}>All Car Listings</div>

      {
        chunkedData.map((eachChunk, idx) => {
          return (
            <div className={styles.cars_card} key={idx}>

              <div className={styles.allcars_list}>
                {
                  eachChunk.map((car: any, index: any) => {
                    return (
                        <Car
                          showTag={index == 1 || index == 2}
                          cardCta="Add to Cart"
                          carInfo={car}
                          urlPrefix="/cars"
                          urlSplitter="/cars"
                          key={index}
                        />
                    )})
                }
              </div>
            </div>
          )
        })
      }


    </div>
  )
}

const AllCarsPage = ({ allCarsData, allCarMakes }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AutoChek Test</title>
        <meta name="description" content="Sample App for Demo Purpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {allCarsData.result.length >= 1 &&
        <div className={`${styles.classifieds_wrapper}`}>

          <div className={`${styles.classified_items} ${styles.full_width}`}>

            <AllCarsListings allCarsData={allCarsData.result} />

            <div className={styles.pagination_wrap}>
              {/* <Pagination sizes={[25, 40, 50, 60]} theme={styles3} total={allCarsData.pagination.total} /> */}
            </div>

          </div>

        </div>
      }
      {allCarsData.result.length === 0 &&
        <div className={styles.no_data_found}>
            <div className={styles.no_preview_msg}>No data was retrieved</div>
        </div>
      }
    </div>
  )
}

export async function getServerSideProps({ query }: any) {
  const pageNum = query.page;
  const pageSize = query.size;
  const [allCarMakes, allCarsData] = await Promise.all([
    getCarMakes(), getAllCars({
      isRandomData: false,
      pageNum,
      pageSize
    })
  ]);

  return { props: { allCarMakes, allCarsData } };
}

export default AllCarsPage


