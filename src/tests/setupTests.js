import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DOTENV from 'dotenv';


Enzyme.configure({
    adapter: new Adapter()
})

DOTENV.config({path:'.env.test'})