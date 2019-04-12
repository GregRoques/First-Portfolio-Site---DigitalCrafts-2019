import React from 'react'
import './Design.css'

const articleList ={
    1:{
        title: '5 Days in Israel',
        category: 'Travel',
        image: 'images/design/articles/israel.jpg',
        link: 'https://www.whereyat.com/a-trip-through-history-five-days-in-israel'
    },
    2:{
        title: 'Marking Down Moscow',
        category: 'Travel',
        image: 'images/design/articles/moscow.jpg',
        link: 'https://www.whereyat.com/marking-down-moscow'
    },
    3:{
        title: 'City Surf Makes Waves on Magazine St.',
        category: 'Fitness',
        image: 'images/design/articles/citySurf.jpg',
        link: 'https://www.whereyat.com/making-waves-on-magazine-stree'
    },
    4:{
        title: 'Dropping the Bass on Indoor Spin',
        category: 'Fitness',
        image: 'images/design/articles/spin.jpg',
        link: 'https://www.whereyat.com/fit-club-cyclebar-drops-the-bass-on-indoor-spin'
    },
    5:{
        title: 'NOLA Street Art 2018',
        category: 'Culture',
        image: 'images/design/articles/streetArt.jpg',
        link: 'https://www.whereyat.com/10-street-artists-murals-whove-given-new'
    },
    6:{
        title: 'Video Games Based in New Orleans pt.1',
        category: 'Culture',
        image: 'images/design/articles/videogame.jpg',
        link: 'https://www.whereyat.com/video-games-set-in-new-orleans6'
    },
    7:{
        title: 'Interview with Broken Social Scene',
        category: 'Music',
        image: 'images/design/articles/bss.jpg',
        link: 'https://www.whereyat.com/calming-the-storm-broken-social-scenes-kevin'
    },
    8:{
        title: 'Interview with Big Gigantic',
        category: 'Music',
        image: 'images/design/articles/bigGigantic.jpg',
        link: 'https://www.dropbox.com/s/6qsqdhuperbeprw/big%20gigantic.pdf?dl=0'
    },
    // 9:{
    //     title: 'Jobs',
    //     category: 'Film Review',
    //     image: 'images/design/articles/jobs.jpg',
    //     link: 'https://www.whereyat.com/jobs'
    // },
    // 10:{
    //     title: 'Transformers: Age of Extinction',
    //     category: 'Film Review',
    //     image: 'images/design/articles/t4.jpg',
    //     link: 'https://www.whereyat.com/transformers-age-of-extinction'
    // },
}

const IssueList = ({art}) => {
    return(
        <div className='magContainers'>
            <a rel="noopener noreferrer" target="_blank" href={articleList[art]['link']} >
                <div className="mags"> <img src={articleList[art]['image']} alt={articleList[art]['title']}/>
                    <div className="imgDescription">
                    – {articleList[art]['category']} –
                    <br/>
                    <i>{articleList[art]['title']}</i>
                    </div>
                </div>
            </a>
        </div>
    )

}

function Articles(props){

    return(
        <div>
            <div className="artDirection">Articles</div>
            <div className='magRows'>
                {(Object.keys(articleList)).map((num, i) => {
                            return(
                            <IssueList
                            key={i}
                            art={num}
                            />
                            )
                        })}

            </div>
            <div className='buttonAlign'>
                    <span><a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1DC-jCkloiDcsfvOqXuUdJ-HMAchRf60jFP7xR_zLN98/edit'>
                        <button className="demoReadButtons">More Articles</button>
                    </a></span>
                </div>
        </div>
    )
}

export default Articles;