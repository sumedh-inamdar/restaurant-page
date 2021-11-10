import ksr from './assets/images/ksr.jpg';
import pfctp from './assets/images/pfctp.jpeg';
import cc from './assets/images/cc.jpeg';
import cm from './assets/images/cm.jpeg';
import icc from './assets/images/icc.jpeg';
import nzl from './assets/images/nzl.jpeg';
import vm from './assets/images/vm.jpeg';
import pfsgt from './assets/images/pfsgt.jpeg';
import hfn from './assets/images/hfn.jpeg';
import fic from './assets/images/fic.jpeg';
import bbm from './assets/images/bbm.jpeg';
import rtm from './assets/images/rtm.jpeg';
import loc from './assets/images/loc.jpeg';

const homeContent = [ {
    'el': 'p',
    'text': 'Manchurian Delight balances traditional Indo-chinese cuisine with a contemporary atmosphere. A local legacy for nearly 35 years, our menu is prepared fresh daily from ingredients selected with an eye towards sustainability and a focus on local purveyors. A curated collection of contemporary Indian and Chinese art sets the stage for an experience rooted in tradition and delivered with a fresh approach.',
    'class': 'text'
    }
];

const menuContent = {
    'Appetizers': '',
    'Mains': '',
    'Desserts': '',
    'Cocktails': ''
};
menuContent.Appetizers = [ 
    {
        'el': 'h1',
        'text':'Appetizers',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Keema Spring Rolls',
        'description': 'delicious crispy rolls stuffed with slow cooked keema (ground lamb)',
        'price': '$6 (4 rolls)',
        'class': 'menuItem',
        'pic': ksr
    },
    {
        'name': 'Pan Fried Chili Tofu/Paneer',
        'description': 'tofu/Paneer, scallion, red &green pepper, chili paste',
        'price': '$11',
        'class': 'menuItem',
        'pic': pfctp
    },
    {
        'name': 'Dry Chili Chicken',
        'description': 'chicken, onions, scallions, celery, ginger, garlic, thai chilli',
        'price': '$13',
        'class': 'menuItem',
        'pic': cc
    },
    {
        'name': 'Dry Cauliflower Manchurian',
        'description': 'cilantro, onions, scallion, soy sauce, ginger, garlic',
        'price': '$11',
        'class': 'menuItem',
        'pic': cm
    }
];
menuContent.Mains = [
    {
        'el': 'h1',
        'text':'Mains',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Hot Garlic New Zealand Lamb',
        'description': 'onions, green pepper, garlic',
        'price': '$21',
        'class': 'menuItem',
        'pic': nzl
    },
    {
        'name': 'Indo Chinese Chicken',
        'description': 'sliced chicken, mushroom, in black bean sauce ',
        'price': '$19',
        'class': 'menuItem',
        'pic': icc
    },
    {
        'name': 'Vegetable Manchurian',
        'description': 'air fried mixed vegetable balls smothered with spicy indo-chinese gravy',
        'price': '$17',
        'class': 'menuItem',
        'pic': vm
    },
    {
        'name': 'Pan Fried Sesame Garlic Tofu',
        'description': 'crispy pan-fried sesame garlic tofu garnished with shallots',
        'price': '$16',
        'class': 'menuItem',
        'pic': pfsgt
    }
];
menuContent.Desserts = [
    {
        'el': 'h1',
        'text':'Desserts',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Honey Fried Noodles',
        'description': 'crispy noodles, tossed with sugar and honey, served with vanilla ice cream',
        'price': '$9',
        'class': 'menuItem',
        'pic': hfn
    },
    {
        'name': 'Fried Ice Cream',
        'description': 'vanilla ice cream battered and fried to perfection ',
        'price': '$9',
        'class': 'menuItem',
        'pic': fic
    }
];
menuContent.Cocktails = [
    {
        'el': 'h1',
        'text':'Cocktails',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Blazing Buddha Margarita',
        'description': 'chili flake and sugared rim, tequila sake, lime juice, simple syrup and splash of orange juice',
        'price': '$11',
        'class': 'menuItem',
        'pic': bbm
    },
    {
        'name': 'Red Tara Mojito',
        'description': 'rum sake, strawberry puree, muddled lime and mint, fresh lime juice and soda',
        'price': '$10',
        'class': 'menuItem',
        'pic': rtm
    }
];

const contactContent = {
    'Location': '',
    'Hours': '',
    'Phone Number': '',
    'Email': '',
    'pic': loc
}
contactContent.Location = [
    {
        'el': 'h2',
        'text': 'Location',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'el': 'p',
        'text': '1234 Sunset Blvd, San Francisco, CA',
        'class': 'text'
    },
    {
        'el': 'p',
        'text': '(415) 555-1234',
        'class': 'text'
    },
    {
        'el': 'p',
        'text': 'contact@example.com',
        'class': 'text'

    }
];
contactContent.Hours = [
    {
        'el': 'h2',
        'text': 'Hours',
        'class':'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'el': 'p',
        'text': 'Monday: Closed \r\n Tuesday: 11AM to 9PM \r\n Wednesday: 11AM to 9PM \r\n Thursday: 11AM to 9PM \r\n Friday: 11AM to 11PM \r\n Saturday: 11AM to 11PM \r\n Sunday: 2PM to 8PM',
        'class': 'text'
    }
];

export { homeContent, menuContent, contactContent };