import { createSlice } from '@reduxjs/toolkit';
import { initDataOfMeasureSheet } from '../../constants/variables';

const initialState = {
  data: {
    windowTable: {
      tearouts: 'WOOD',
      pockets: 'WOOD',
      cutbacks: { w: '-3/8' },
    },
    typeTable: { grid: 'NO GRIDS', capping: 'BRICKMOLD' },
    mainTable: {},
    drawingData: [
      // {
      //   style: '{"height": "100%"}',
      //   value:
      //     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACzCAYAAABVaUhsAAAAAXNSR0IArs4c6QAAC8FJREFUeF7tnWvMP8cUxz8NSaM0dQsNoiRKom5FUnVvKBWXIiVK0yKiERHXxBuhxCsE7QuJeoE0NGniLoK4VFARbVDahKJEkLiVUFIh5Ps8u7HP/ndmzuzO7m/nt2eSpsn/mZmdPZ/fmT3nzJmZ4/BSgwQuAc4BzugM9jrg5cD1+rfjaniLDY7xacBLgCcA90+8/z2B3zvI9f1KXgV8IGNYXwHOdpAZEpu56snAZcALRjzndAc5QmozNfnvhH4vdZATpFeoqTTwXcD9JvT3MQc5QXoFmgriVQX6OctBFpDiyC6eDHx9ZNt+s3s4yEKSHNHNlG9i93HfBR7jIEcQKNDkx8BpBfpRF28HLnGQhaSZ0Y2iNG/LqJ+q+mjgOgeZElP5v5eaUjUyhekE0kN05TlFe/wm8PiCz7wYuNxBFpSooauSVqoe9xfgLOAHDtIg/UJVjgduAe5QqD918yng+W1//o0sKNlIV7Is31rwUb8Fngj83EEWlGqiq1LRm+5jDlyO7j+4Rs4LVPFTRW+mxFGHRnjgcjjIeeF1e78CuKDw434N3Lffp2tkYSl3ursGODOj+78D/wFOSrRReseHHWSGZCdU1Qq/VvqtRRDfazCIvgM8dqhT10irqO31HgF8316dG4CHAL8ETkm0ex7waQeZId2RVe/cGDeCaS1y6tVOfmGs/BAI9usaaRW3rd5HgItsVQ9qXd1EZ/T/J43VRrVzkBlST1R96ZARkmhzaQMzpY1/bbQ22J2DLANSU578RU2R1iIL9fbGb+MxAYD+QxykVezxegpcPzyzKxkuChS8z9DuLk2Q3DXSIKyxVd4PvDaz8UebEJus25QWJ7XRv5GZ0h+oPmZp6leN9Sk3ImXg6NsordWSVbT41JqSUPjv0qSbDRrV7+H0Bk7KwFG71wPS+GRxkEkRBStIo87NbC4wclEsP4Co3+jGTqbkA9Wfa3Dg+00/A6jd1xrfMTUSBQrkX5qKa6RJTEcqjZlS2+9i66aknir/8nWpSt2/O8gcaR3WHWOl6ruoYvE1W+hJA8dB5sNrW8iC1Pctp7ysCXQLoiUGGwyMxx7qGpmD5PCblXIZuj22PqDVMLoSeHHekA5rO0i71HJ9Rjn9ir9aA+n/ArSNPGtKbYfvIG0gc5enWtchJ5CeZaX2h+0gbSBz9msIorRXrsYxKRmBx32jaWMbzUAtB5kWXY670UJss+dScdT26Tq5QxkCo4uDTIvO6m6MhZjtMw4N2UHGQUqj/tCsG8ZqjoVoDoqnfm8OMi4hi7vROvCtQZSTjDzKZ3SNTP2sj/5dIbLUoq80SoaNvm9aW8yB2MZe80YVqO0aOSwYwdEyU8xYubXZ6zgGYrEp1f3IsB5YfEY5708FfjQi/VFPVuz1YF9jqeIaeawkLVZqC+Im4AGZMBR7VbSnaHGQR8VpWWds46c66Cj33Lg2bFcUojpzkP8XqSWlsQ29jdnzOBtEB3lUL1IpjTJQBFvx09zjVYpaqO5+hCc0SyxV8LTB9NmZ86LiqJqyR61qWJ/lU+uhH5g6E+7PwF2tQu3UWwSiT62HfqIlo20EQ34BPGpuTXQ/8lAC1pX7XJA/0UF/S0HcukZaQnC5AFX/E8B5YxpOabPVb6RiopZ9Fzmy1VFiOlJsJ2WrIC2rGlYgmp7f2T8uxdq4VL0tgiw1pcrvfDPw5VIwpvSzNZCyUnVOzZ2mCK0xkrSWuJqyJZBvadLw7zZB+grRSaPNezImPCur6b6ClOYpkVjO/lOAh2ZJ5djKygLQqohpi9vEZ41qvi8gu+AEz5KabxWYkqMUwps1xGYdTKherSDlPkjjBExxzJwUC6vMpIUKkK9uGh16gVyQz2xOZ/o3HISg9P+hF1Xqu4yB2+kmteYQvCOnGXYG8zeD6d6Ck7bpvznAtUPSKkc7ja5aC7tAc0DKzD478HMWzJ8CD2y+R2MNij8C/wS+DZwIqJ+HASdY1WhivfaQhknJwhPHMKq5FaRlmWfUAFbSSOuFeseieTRLvpsFpK7D+92Sg1rwWTJkNI1Wp4F9GVlAKoqv4yX3qWj6vtfaLdEcgVtAKktM2WL7VIqnI+5aOBaQGuPnAVms+1DMZ9fU9LJWkDpDW35V7SXr7JqaXtYKUu90H+ANgG7kLnXT2pKyks976j4YNkNCywHZba+QmKIqz2nO2D5jSSKRZ+kCsdA7vTrzNvGVvJJtGGNB9ntXKEvX++SmCtpGGa+l6VIBCUV8Qkdtzp5XWuJFpvRRCmQ7Bgnzk4DOF52rCJwcd8HT6rzCaLHF4uI7n+Z6sSn9lgbZjkVTrr6lCrE9slnIld/WLbrfSWG9G5u4rWKx1wK6OkFhObVTTPU24I5Njs1XB3y/VP7NpNMypgh3ybZzgVzyHWL5N3s/pbaCrh1kLAa8iSl1H0CmLkoptj9/yell7LNq1sjY7qnNTKm1a+TmrdS+5taokSkrdVNTas0aGbNSi5wiNfY7tct2tWlkbEoddfLwLoVf8tk1gUztZdyE4x+CXxPI2AG2m51Sa/tGxraHb3pKrQ1kzGfc9JRaE8iYgbP5KbUWkDEDx6fUjuWzdmMndi7cJh3/Gq3W2GUpm4ulpnzONWtkKIKzqeWpFMC1fyNj7sZe5qVagdU2tYbcjcn3Y0wV2Frbr3Fqjd1es3ep/qV+GGsDKXcjdMi76dLoUoKprZ+1gQw5/+4zJn5ZawKplMc/AccPjNl9xopAnglcMzBe9xkN8/yaNFLJyTrftF8mXwBmkEP1VdYC8pXABwekqeOn31G9lBd4gTWADF2YooVk3ZHhxSCBNYA8H/i4T6kGWpEqawCpg+EVkuuWK4ALp73atlrvGuQzgC8MiNxX/TN/h7sG+TngWb0x68wbWapeMiSwS5ByNeRy9IuWr6SRXjIksEuQv2kOLeoP12OqGQDbqrsC+UXg6YHx6tqi0EmSI15xG012ATJ1tZ+2nGsFxEuGBHYBMpajqptSdZDEPzLewavu4P7I1C5jXSY29qzXTQNdWiNj+zcEwgMBI3+OS4JMbVDVK3ggoAKQqVOYlQUw51nlI0VUR7OlNDKWi9NKapbbwOvAMH2US4GMZcbpLTwnZyLLpUCmLqL2XVUVgEy5HHoFT+eoAGTK5fDkqokQ1XzuqdXicniqYwUgU5duustRAOISGqlF4lMiY3WXowKQKZfD9zkWgji3RuqY6nMjY3WXowKQsW3j7fDd5agAZMrI0fV+mnq9FJLAXO5HysjxDauFALbdzAEytv9fz/Xt44UhzmXspCI5vuZYCUhdqHJSYKyujTNAnEMjU76jh+MqARk7ptq1cSaIpTVSWQC3RMbq2lgJyFhOjmvjjBBLa2TMd3RLtRKQsSwA18aZIZbUyJjv6NpYCchYqqNr4wIQS2nkK4APBcbr2lgRyG8BjxsYrydVLQSxhEbG1h19haMikKHD478EnLPge2z+UVOWsWKRHF/9X/inNQVkKJLjlurCEKd8I2Muh8dUKwIZWq7yhOMdQJyikaG4ql/lUBHIkDYq4VhTrpcdSGCMsRPa6+gnVu0AYPvIXJCxDDl3OSoCGUrl8ITjHULMNXZi2ujhuIpAhrTRAwA7hpijkTFt9ABARSBD2ugBgBVAtGpkLB/HAwAVgQxtWPUdxyuBaNHImDb6juOKQMa2AHgAoBKQMUvVXY4VQUxNrbpYRResDBV3OSoCeStwwsB43eVYGcSYRr4beFNgvO5yVALywcBVwGkD470NOBnQrmQvK5LA0DJW6FJODfti4PIVjd+H0khgCOTNgbPFbwBeCNzo0lufBPogY9/GzyaOJFvf221oRF2Q9waUxnH3wPv7SY4r/mF0Qca2jvtVgCuG2HU/UseqeGJVBSBPBL4HPCgyVrkibuSsGKam1hcBV0bG6NPqigG2QxPINwLviYzVp9VKQOqyal1aHSqnAj+r4F02PcTWatWl1bq8ul8UxVE0x8vKJdB1Py4DXtMZr45c0bSqDTteVi6BfmRHQQFNpTcBupXcSyUS+B9hRup8rIYB/wAAAABJRU5ErkJggg==',
      // },
      {},
      {},
      {},
    ],
  },
};

for (let i = 0; i < 40; i++) {
  initialState.data.mainTable[i] = {
    ...initDataOfMeasureSheet,
    no: i + 1,
    // room: 'LIVING ROOM',
    // intColor: 'Colonial Cherry - Laminated',
    // extColor: 'Almond - Extruded',
    // energy: 'LOE 340 SZONE SUNSHILD',
    // grids: '6/6',
    // roWidth: i,
    // categoryNum: i,
  };
}

export const measuresheetSlice = createSlice({
  name: 'measuresheet',
  initialState,
  reducers: {
    updateWindowTable: (state, action) => {
      state.data.windowTable = { ...action.payload };
    },
    updateTypeTable: (state, action) => {
      state.data.typeTable = { ...action.payload };
    },
    updateMainTable: (state, action) => {
      state.data.mainTable = { ...action.payload };
    },
    updateDataMeasureSheet: (state, action) => {
      state.data = action.payload;
    },
    // updateDrawingDataFunc: (state, action) => {
    //   state.data.drawingData[action.payload.index] = action.payload.value;
    // },
    updateDrawingDataFunc: (state, action) => {
      state.data.drawingData[action.payload.index] = {
        value: action.payload.value,
        style: JSON.stringify(action.payload.style),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateWindowTable,
  updateTypeTable,
  updateMainTable,
  updateDataMeasureSheet,
  updateDrawingDataFunc,
} = measuresheetSlice.actions;

export default measuresheetSlice.reducer;
