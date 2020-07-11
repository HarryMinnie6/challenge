console.log("fff");

//displaying main content/body
$(function(){
    let $header = $(".header")
    $.ajax({
        type: 'GET',
        url: 'https://arthurfrost.qflo.co.za/php/getTimeline.php',
        success: function(data){
            console.log('success', data);
            $.each(data.Body, function(i){
                
                    $header.append(
                        `<div>${this['About']}</div>`)
            })
        }
    })
})

//displaying songs
$(function(){
    let $results = $(".results")
    $.ajax({
        type: 'GET',
        url: 'https://arthurfrost.qflo.co.za/php/getTimeline.php',
        success: function(data){
            console.log('success', data);
            $('.welcome').append(data.Timeline[0].Title)
            $('.about').append(data.Timeline[0].Description)
            $.each(data.Timeline, function(i){

                

                if(i >= 1 && i <=10   ){
                    $('tbody').append(
                        `<tr class="table-info-display">
                            <th><img src="${this['Image']}"  class='song-img'></th>
                            <th>${this['Category']}</th>
                            <th>${this['Title']}</th>
                            <th>
                                <audio controls>
                                <source src="${this['Audio']}" type='audio/mpeg' />
                                </audio>
                            </th>
                        </tr>`)
                }
                 
            })
            $('.banking-details').append(data.Timeline[25].Description)
        }
    })
})
//sorting


/** 
 * 
 * @param {HTMLTableElement}
 * @param {number}
 * @param {boolean}
 * 
 * 
*/

function sortTableByColumn(table, column, asc=true){
    const directionChange = asc ? 1 : -1;
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a, b) => {
        const aColText= a.querySelector(`td:nth-child(${column + 1})`).textContent.trim()
        const bColText= b.querySelector(`td:nth-child(${column + 1})`).textContent.trim()
        return 
    })
}

sortTableByColumn(document.querySelector('table'), 1)
















// $('th').on('click', function(){
//         let column=$(this).data('column')
//         let order=$(this).data('order')
//         console.log('column was clicked', column, order);
    
        
//         $(function(){
//             let $results = $(".results")
//             $.ajax({
//                 type: 'GET',
//                 url: 'https://arthurfrost.qflo.co.za/php/getTimeline.php',
//                 success: function(data){
//                     console.log('success', data);
//                     $.each(data.Timeline, function(i){
//                         if(order ==='desc'){
//                             $(this).data('order', 'asc')
                            
//                             data.Timeline= data.Timeline.sort((a,b) => a[column] > b[column] ? 1 : -1)
                    
                    
//                         }else{
//                             $(this).data('order', 'desc')
//                             data.Timeline= array.sort((a,b) => a[column] < b[column] ? 1 : -1)
                    
//                         }
//                         $('.songs').innerHTML=''
//                         if(i >= 1){
//                             $('.songs').append(`<tr>
//                                 <td>${this['Id']}</td>
//                                 <td><img src="${this['Image']}"  class='song-img'></td>
//                                 <td>${this['Title']}</td>
//                                 <td>
//                                     <audio controls>
//                                     <source src="${this['Audio']}" type='audio/mpeg' />
//                                     </audio>
//                                 </td>
//                                 </tr>`)
//                         }
                        
                       
//                     })
                    
//                 }
        
//             })
//         })
//     })
// let sortBtn = document.querySelector('.sorting')

// sortBtn.addEventListener('click', function(){
//     console.log('clclclc');

// })
   










///////////////////////////////////////////////

// sorting the table
// let sortBy = document.querySelector('.filter-shop')
//event listener for the sort by bar
// sortBy.addEventListener('click', function(e){
//     console.log(
//         e.target.value
//     );
//     console.log(data.Timeline.Category);
// })

//function for what happens when you click on the sort by bar
// function filterShop(e){
//     let items = shopDisplay.childNodes
//     items.forEach(function(){
//         switch(e.target.value){
//             let Category= 
//             case 'all':
//                 if(e.target.value === Category){
//                     $('.songs').append(`<tr>
//                         <td>${this['Category']}</td>
//                         <td><img src="${this['Image']}"  class='song-img'></td>
//                         <td>${this['Title']}</td>
//                         <td>
//                             <audio controls>
//                             <source src="${this['Audio']}" type='audio/mpeg' />
//                             </audio>
//                         </td>
//                         </tr>`)
//                 }    
//             break;
//             case 'boards':
//                 boardWrapper.style.display = ''
//                 bagsWrapper.style.display = 'none'
//                 wetsuitsWrapper.style.display = 'none'
//                 accessoriesWrapper.style.display = 'none'
//                 aparrelWrapper.style.display = 'none'     
//                 break;
//             case 'bags':
//                 boardWrapper.style.display = 'none'
//                 bagsWrapper.style.display = ''
//                 wetsuitsWrapper.style.display = 'none'
//                 accessoriesWrapper.style.display = 'none'
//                 aparrelWrapper.style.display = 'none'     
//                 break;   
//             case 'wetsuits':
//                 boardWrapper.style.display = 'none'
//                 bagsWrapper.style.display = 'none'
//                 wetsuitsWrapper.style.display = ''
//                 accessoriesWrapper.style.display = 'none'
//                 aparrelWrapper.style.display = 'none'     
//                 break;   
//             case 'accessories':
//                 boardWrapper.style.display = 'none'
//                 bagsWrapper.style.display = 'none'
//                 wetsuitsWrapper.style.display = 'none'
//                 accessoriesWrapper.style.display = ''
//                 aparrelWrapper.style.display = 'none'     
//                 break;   
//             case 'aparrel':
//                 boardWrapper.style.display = 'none'
//                 bagsWrapper.style.display = 'none'
//                 wetsuitsWrapper.style.display = 'none'
//                 accessoriesWrapper.style.display = 'none'
//                 aparrelWrapper.style.display = ''     
//                 break;          
//         }
//     })
// }

// 