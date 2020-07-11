console.log('test');

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

                

                if(i >= 1 && i <=24   ){
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
                 else if(i >= 26   ){
                    $('tbody').append(
                        `<tr class="table-info-display">
                            <th class='img-holder'><img src="${this['Image']}"  class='song-img'></th>
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