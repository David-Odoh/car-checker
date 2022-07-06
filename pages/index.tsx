import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AllCarsListings, PopularMakesListings } from '../shared/components/car-listing'
import HomeSlider from '../shared/components/home-slider'
import { SideBarFilter } from '../shared/components/sidebar-filter'
import { getAllCars, getCarMakes } from '../shared/services/car_services'
import styles from '../styles/Home.module.scss'


const HomePage = ({ allCarsData, allCarMakes }: any) => {
  console.log("allCars", allCarsData)
  return (
    <div className={styles.container}>
      <Head>
        <title>AutoChek Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Car App for demo purpose" />
      </Head>
      {allCarsData.mainData.result.length >= 1 &&
        <div>

            <HomeSlider slides={allCarsData.selectedData} />
          
          <div className={styles.popularbrands_header}> Popular Makes</div>
          <div className={styles.classifieds_wrapper}>
            <div className={styles.classified_items}>
              <PopularMakesListings allCarMakes={allCarMakes.makeList} />
              <AllCarsListings allCarsData={allCarsData.mainData} />
            </div>
            <SideBarFilter />
          </div> 
        </div>
      }
      {allCarsData.mainData.result.length === 0 &&
        <div className={styles.no_data_found}>
          <div className={styles.no_preview_msg}>No data was retrieve</div>
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
      isRandomData: true,
      pageNum,
      pageSize
    })
  ]);

  return { props: { allCarMakes, allCarsData } };
}

export default HomePage
