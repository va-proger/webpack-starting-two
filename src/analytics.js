function createAnalytics(){
    let counter = 0;
    let destroyed = false;
    const listener = () => counter++;
    document.addEventListener('click', listener);
    return {
        destroy(){
            document.removeEventListener('click', listener);
            destroyed = true;
        },
        getClick(){
            if(destroyed){
                return  `Analytics is destroyed. Total click: ${counter}`
            }
            return counter;
        }
    }
}
window.analytics = createAnalytics();