const Svg = ({src="" , width = 32, handlePlayerInvite = () => (null)}) => {
	{/* TODO : add width null check*/}
	return (
		<div className="svg">
			{handlePlayerInvite && <img src={src} alt="" width={width} onClick={(e) => handlePlayerInvite()}/>}
			{!handlePlayerInvite && <img src={src} alt="" width={width} />}
	
		</div>
	)
}

export default Svg;
