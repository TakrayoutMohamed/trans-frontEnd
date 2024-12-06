import useRefreshToken from "@/src/services/hooks/useRefreshToken"

const AboutUs = () => {
  const refreshToken = async () => {
    try{

      const refreshTokenHook = useRefreshToken();
      const response = await refreshTokenHook()
      console.log("refresh token from about us")
      console.log(response);
      
    }
    catch(err){
      console.log("error in refresh token from about us")
      console.log(err);
      
    }
  }
  return (
    <div>
      <div className="btn btn-success" onClick={refreshToken}> refreshToken </div>
      AboutUs
    </div>
  )
}

export default AboutUs