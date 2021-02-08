import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const TestButton = styled(Button)({
  background: '#82D827',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '18px',
  width: '80%',
  '&:hover':{
      background: '#82D827'
  }
});

export const YesButton = styled(Button)({
  background: '#82D827',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '18px',
  width: '40%',
  '&:hover':{
      background: '#82D827'
  }
});

export const NoButton = styled(Button)({
  background: '#1C4F75',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '18px',
  width: '40%',
  '&:hover':{
      background: '#1C4F75'
  }
});
