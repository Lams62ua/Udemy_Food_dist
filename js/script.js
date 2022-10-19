

window.addEventListener('DOMContentLoaded', () => {

    // ===== TABS...===== 
    //var`s
    const tabs = document.querySelectorAll('.tabheader__item'), 
          tabsContent = document.querySelectorAll('.tabcontent'), 
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide'); 
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); 
        }); 
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade'); 
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); 
    }

    hideTabContent(); 
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; 

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent(); 
                    showTabContent(i);
                }
            }); 
        }
    });
    //...TABS

    // ===== TIMER... =====
    //var`s
    const deadline = '2022-10-18'; 

    // Функція - returns - залишок (різницю) часу. 
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), 
              days = Math.floor(t / (1000 * 60 * 60 *24)), 
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), 
              minutes = Math.floor((t / 1000 / 60) % 60), 
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days, 
            'hours': hours, 
            'minutes': minutes, 
            'seconds': seconds,
        }; 
    }

    // Функція - додає нуль
    function getZero(num) {
        if (num >= 0 && num <= 9) {
            return `0${num}`; 
        } else {
            return num; 
        }
    }

    // Функція - перенесення на сторінку
    function setClockToPage(selector, endtime) {
        const timer = document.querySelector(selector), 
              days = timer.querySelector('#days'), 
              hours = timer.querySelector('#hours'), 
              minutes = timer.querySelector('#minutes'), 
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); 
        
        // Функція - оновлює таймер кожні 1000 мс
        updateClock(); 

        function updateClock() {
            const t = getTimeRemaining(endtime);    // (endtime) - (deadline)

            days.innerHTML = getZero(t.days); 
            hours.innerHTML = getZero(t.hours); 
            minutes.innerHTML = getZero(t.minutes); 
            seconds.innerHTML = getZero(t.seconds); 

            if (t.total <= 0) {
                clearInterval(timeInterval); 
            }
        }
    }
    setClockToPage('.timer', deadline);   // Argumenst goes to str.88
    //...TIMER 

    // ===== MODAL window ===== 
    //var`s 
    const modalTrigger = document.querySelectorAll('[data-modal]'), 
          modal = document.querySelector('.modal'), 
          modalCloseBtn = document.querySelector('[data-close]'); 

        // Перебор для двох кнопок
        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => { 
                modal.classList.add('show'); 
                modal.classList.remove('hide'); 
                document.body.style.overflow = 'hidden'; 
            });
        }); 
        
        // DRYSLF
        function closeModal() {
            modal.classList.add('hide'); 
            modal.classList.remove('show'); 
            document.body.style.overflow = ''; 
        }
        // Перебор не потрібно так як кнопка одна 
        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(); 
            }
        }); 

        // Close Modal with ESC
        document.addEventListener('keydown', (e) => {
            // if (e.code === 'Escape') {           -->  Так на ESC буде реагувати постійно
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal(); 
            }
        }); 

    //toggle version ??? !!! error 
        // modalTrigger.addEventListener('click', () => {
        //     modal.classList.toggle('show'); 
        //     document.body.style.overflow = 'hidden'; 
        // }); 

        // modalCloseBtn.addEventListener('click', () => {
        //     modal.classList.toggle('show'); 
        //     document.body.style.overflow = ''; 
        // }); 
    //...MODAL 


}); // DOMContentLoaded 











