const awsconfig = {
    aws_project_region: 'us-east-2', // e.g., 'us-west-2'
    aws_cognito_region: 'us-east-2', // e.g., 'us-west-2'
    aws_user_pools_id: 'us-east-2_kLkhkhjxV', // e.g., 'us-west-2_XXXXXXXXX'
    aws_user_pools_web_client_id: '1mln92h4902et0fg156ktk2qrp', // e.g., 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
    oauth: {
      domain: 'https://studioghibli.auth.us-east-2.amazoncognito.com', // e.g., 'your-domain.auth.us-west-2.amazoncognito.com'
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'http://localhost:3000/callback',
      redirectSignOut: 'http://localhost:3000',
      responseType: 'code', // for Authorization code grant
    },
  };
  export default awsconfig;