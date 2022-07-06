import styles from '../../styles/Home.module.scss'

export const SideBarFilter = () => {
    return (
      <div className={styles.filters_wrap}>
  
        <div className={styles.filter_wrap}>
          <div className={styles.filters_header}>Search here...</div>
          <input type="text" placeholder="Product name..." />
          <button className={`btn ${styles.search_cta}`}> &gt;</button>
        </div>
        <div className={styles.filter_wrap}>
          <div className={styles.filters_header}>Price</div>
          <div className={styles.each_filter_type}> Under $1,000 </div>
          <div className={styles.each_filter_type}> $1,000 - $5,000 </div>
          <div className={styles.each_filter_type}> $5,000 - $10,000 </div>
          <div className={styles.each_filter_type}> $10,000 - $20,000 </div>
          <div className={styles.each_filter_type}> $20,000 $30,000 </div>
          <div className={styles.each_filter_type}> Over $30,000 </div>
        </div>
        <div className={styles.filter_wrap}>
          <div className={styles.filters_header}>Discounts</div>
          <div className={styles.each_filter_type}> <input type="checkbox" name="" id="ten_more" /> <label htmlFor="ten_more">10% or more</label>  </div>
          <div className={styles.each_filter_type}> <input type="checkbox" name="" id="twen_more" /> <label htmlFor="twen_more"> 20% or more </label></div>
          <div className={styles.each_filter_type}> <input type="checkbox" name="" id="thirty_more" /> <label htmlFor="thirty_more">30% or more</label>  </div>
          <div className={styles.each_filter_type}> <input type="checkbox" name="" id="fifty_more" /> <label htmlFor="fifty_more">50% or More</label>  </div>
          <div className={styles.each_filter_type}> <input type="checkbox" name="" id="sixty_more" /> <label htmlFor="sixty_more">60% or More</label>  </div>
        </div>
      </div>
    )
  }