import './SocialMediaCard.css'


export function SocialMediaCard({ name, userName, instagram, youtube, tiktok, spotify }) {

    const safeUserName = userName.replace(/\./g, "-")


    return (
        <article className='sm-userCard'>
            <header className='sm-userCard-header'>
                <img className='sm-userCard-avatar' src={`${import.meta.env.BASE_URL}${safeUserName}.jpg`} alt="avatar" />
                <div className='sm-userCard-info'>
                    <strong className='sm-userCard-name'>{name}</strong>
                    <span className='sm-userCard-username'>@{userName}</span>
                </div>
            </header>

            <aside className='sm-social-buttons'>
                <button className='sm-social-button-instagram'>
                    <a href={instagram} target="_blank">
                        <img className='sm-social-icon-instagram' src='https://simpleicons.org/icons/instagram.svg'></img>
                    </a>
                </button>
                <button className='sm-social-button-youtube'>
                    <a href={youtube} target="_blank">
                        <img className='sm-social-icon-youtube' src='https://simpleicons.org/icons/youtube.svg'></img>
                    </a>
                </button>
                <button className='sm-social-button-tiktok'>
                    <a href={tiktok} target="_blank">
                        <img className='sm-social-icon-tiktok' src='https://simpleicons.org/icons/tiktok.svg'></img>
                    </a>
                </button>
                <button className='sm-social-button-spotify'>
                    <a href={spotify} target="_blank">
                        <img className='sm-social-icon-spotify' src='https://simpleicons.org/icons/spotify.svg'></img>
                    </a>
                </button>
            </aside>
        </article>
    )
}

export default SocialMediaCard
