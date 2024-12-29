interface SvgProps{
	src?: string,
	width?: number,
	handlePlayerInvite?: any,
	Ref?: any
}

const Svg = ({src="" , width = 32, handlePlayerInvite = () => (null), Ref} : SvgProps ) => {
	return (
		<div className="svg">
			{handlePlayerInvite && <img ref={Ref} src={src} alt="" width={width} onClick={(e) => handlePlayerInvite()}/>}
			{!handlePlayerInvite && <img ref={Ref} src={src} alt="" width={width} />}
	
		</div>
	)
}

export default Svg;
