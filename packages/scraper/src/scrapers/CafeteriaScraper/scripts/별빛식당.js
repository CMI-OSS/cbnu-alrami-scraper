const script = {
  url: "https://www.cbnucoop.com/service/restaurant/",
  waitSelector: "#menu-table",
  cafeteria: 2,
  cafeteria_name: "별빛식당",
  getMenus: function () {

    const tabs = document.querySelectorAll('#restaurant-menu > div.navbar.navbar-bg.mb-3.nav.nav-pills > nav > a')
    tabs[this.cafeteria-1].click()

    const weekMenus = document.querySelectorAll('.active table > tbody > tr')
    const weekTitle =  document.querySelectorAll('.weekday-title')
    
    const result = []
    
    let time = 1
    
    
    weekMenus.forEach((weekMenu,weekMenuIndex)=>{
    
                
        if(/아점|아침/.test(weekMenu.innerText)) time = 1
        if(/점심|중식/.test(weekMenu.innerText)) time = 2
        if(/저녁|석식/.test(weekMenu.innerText)) time = 3
    
        if(weekMenuIndex % 2 == 1){
            const days = weekMenu.querySelectorAll('td')
    
            days.forEach((day,index)=>{
                try {
                    if(day.querySelector('.card-header')){
                        const MMDD = weekTitle[index].innerText.replace(/\(월요일\)|\(화요일\)|\(수요일\)|\(목요일\)|\(금요일\)/,'')
                        const mainMenu = day.querySelector('.card-header').innerText
                        const subMeuns = Array.from(day.querySelectorAll('.card-body .side')).map(m=>m.innerText).join(' ')
                        const menu = mainMenu + ' ' +subMeuns
    
                        result.push({
                            id:this.cafeteria,
                            cafeteria_name:this.cafeteria_name,
                            menu,
                            time,
                            date:new Date().getFullYear() +'.'+MMDD
                        })
                    }
                } catch (error) {
                    console.log(error,day)
                }
              
            })
        }
        
    })
    return result
  },
};

module.exports = script;
