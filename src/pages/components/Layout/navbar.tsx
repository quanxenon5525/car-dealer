import React from "react";
import { MaterialSymbolsDirectionsCarOutline } from "../assets/Caricon";
import Link from "next/link";
import { PhMagnifyingGlass } from "../assets/MagnifyingGlasses";

const navbar = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ maxWidth: "30%" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////7+/urq6v09PT39/fq6uru7u5eXl7x8fH5+fl5eXno6Ojd3d2Xl5fHx8cgICC/v7/Ozs4sLCxra2vT09OBgYE5OTkMDAxGRkba2tqQkJCHh4esrKy5ubni4uJMTEwmJiZWVladnZ02NjZkZGRwcHAaGhpXV1cbGxtHR0cxMTE18ZjlAAAb5klEQVR4nNVd64KqOAymoIKiICiIclW8jPr+77dN0iJ4R8uZ2fzYPeOMQNrky6VJ0LTuKVovdnbsOGVqGA6nOEns/c4qFrN19A9u3yltd0nmT0z2kHqTIIv3xf+S0a1dBoPRY94aNMzTZPnbT9yGZok3rJ5ez93MiPe7zWYpafMzn4dxaaSZu6r9oV/+L7hc7z0hlf2BW4ZvCODWdrK8L77jhud/8JCf0yx06VEHvrNr9aizXRmI7QycP7uVdqDjI7rJ8u7ORVNJ979//EkHxOQq6fI5P6RlhuwNU6vx8XETP0TTXh54aXg61P9+4eT0S7d5nd+mY7JC2Wywt5yX7vgdJB37xrwmmMuSvpXHD/b639O07AEUuvPLR4vEfWAFV8H9zwduzV5YGdqZXvonYGeagniatQXfZ09svJE+/p2Z2VJkDzGppPfrPC4yeI6g2r5tObl+7p458NMy3m+2HH8GiTH6OW+LeRKXqT8Y3vgE43IhLrXz8QP3V5F1ihvibsSP66QpguMgTfZFXZum+q7s1aFlYdlGkOuNr63iLf3y5OHP2fYfsXNLDuhfJtd479Y3JM/sxa3NKFjhsNtNOe8Mv/5lPRDmYokiohvd8fCMbNA2V8jUzOhfHnDkJuv739mzs8N2939XlKv6ToqV2yKPPbsDBl7QEgQyEPJpuTXRTB9wAOSMopg9NucHu+bQshVp9xL1cbV5+K1uqARexMLOL9rX856wxyk1tZilz/5iuvd6F1EP6QaIXv9UVC2wyWVUuz1SEL6y0UHOOQxe/NE0uVzSpFUMgWtz/uKLyugIEOeTobKqhxllr2E9Ml3O4fj1LZZpBTxj4gtR2/vqud+mOV/PIYlP4VdrXc7e+OqCo2LC9Acw1KB1OahEA33BH1hL87kSqCHANhfZOVTuySA5vvVdi8VayNjprT8+JBWPZPWd0b/QxoLfdUQbGEpE6DvvfjtkNnC4f/fvkwpZS/hxAZA2eUcCPqcYNHBd3Q3hs3w/j2QwCzgsW9xQLuMYRdXh3o/eoW1cu3I1tVg6Wtk7+icp0JfAodviK7NKFTLw9grwCp6am2+o4E7MEFV9JjcwbxenjodrzebWu91t5c1MlG4DsOfw6ksfUQiXRkSxxQbqbysg0ZrlGnDYaxnaVhqfwU87WOii3RXeolQCWeRJhFu8+s4VFcxHDlnR8otrecscvonKEra8xEuKAnnVpUik6O2zRTZsAnDYHitss37XkrWCq3doxtka/uCthISuPghMDXgs+7Onm0nnAmFqPxIiq4o2PDSaIGhKZGupgUQuhBX2p96XhG8THIYF94wDdccdO7CCAF8HESUNPgtlJmxOHLYDU0mF0I8ReKoHbjYmqpJxe7nqZ3ELv40NvNB6xAricPiZXzKVYSgqI0efsZo8VSJB9NSveVAfUMH0M3GoFx9eohQs4vNwy2i2hfN7lEie5sJLe9urvCabmUfi8AMwFbTv1/CG+5D695m4RMJKKCzSe4HBPSrZRBMcfgRUSBt5tAEww1kcfruLwGCs0cXwwl949h6uvF05J5/RDOJEb8AmET2e+RkoSLKlnXdqwvEprZAx5HDyzXUAb+IJy2GxuWSZ34RTO4lbQsO/curXQ67PM+LQ/ArnIQi3AzaG3eO7OPjcD19KjSm/MPMVFToXhxNxeCcr3IYgvpi7bAy7x9Vn8qnp54tOsCwYjL96KjCrlrYTHH6ZNuNKo1seG8zo6T5UnmgixFIw+K03z59qEe0Fh9+JAwqnXni0i+mn2RtPeDKKGOTX09fTUHD4dV6Qs9hfeuT/uZ8Z2FggnjAT3ydHJszU1o7g8DPP9Or5emcyQIdJ+5BT036EpaEHej899pCmJl+xsyEuOPw+LuAsjrmnChZoMWTDtmZxbbIRBBA7VTuonbjHri0kh0yBQxmDKASogxZ7eVZwTT5xJZxtFSmDPeBWYWCk8j2YIiGKrhDjk7YBQUnwFA0uwcq35ACAWql04L8FUyRE0RwPJDku/rT45kZseqDuYQjwdhWHanIQnK/wYILIRzkbtvBtBqwHemJcYrHvaQIGf59JDtuqzQPi2rQ5sTHnbaO3MPwpKeFO4WJrUQ9iudCTHLZZ8Cd0yJkZ2chb/L467Yit6VDhWmsLBoAeu5JDBaErXbfPH7FEmAneRejIZAP4PyZFclX5c87YINLKikMFFpZoB3rkATafR286Ejw2AXBCu9UvFD0HoDN3kYwLh2rwS0OQnmsTkInkPbtWkIxGfVWGkMjDCCC9cKguoeuz4fGMLqb/1pHIhIJmT+1TcMMMgUp24VCVgmvaccQXzwbMX77j0seEo/gcprKH0KY9lEvvwqH53sH4O2QDiqbcGIF9e3XSf+7D+ZCmjVWCAaeljiLvXzgcKazI49Ax0yZQMDcklHxCHiEuxoRfpZ2uCLxRvrqrC4dKPFNB0wF49fDA9qtUREFh/QxxVEU+WRJfstGJi4YHYQDRl0mRBu1BQkKw+D7TnwZmK9aDOMtV6K0RcTniV47MGodKT8dcNpxy7hZw+WcZwTmZKUuhWyWIQ+k40o7DGofqwJTTFhhbgsV3mf5E+HLwO9BJVhQySeIBPnA069U4HCjtdjIgQ1lCvvKZdAifAE8ocpW3h1wpWKqFXuOQKS395TEU38BcXwNYFo/+ykQLGJmKLYVGUIoWuc6h2o4KNOQbfoMFI4N3h0LCN0yufZ8Lu749XHvT4FBtY0w0ALnL+Lq5D1PqJhvC/0aKjRWQR1JhNThUCqaoY4k208dg8u6bcpuA1OlgCxG7CsDqOodKwVSDzISpIdj4DwLFHI/XD70OtvBgErDYDQ7VgqlwT6dDU4bw1zQnU4la+NXx3h1agH2dgiDVOWSq+2FyUDOolM+xYuCaAtJPzB+qrsTdiVVzOIebS/uI6tuEaO0GPVDJW4/sRBhrq7eFGgkGaF3JOSwuHKr0TIE4nI6BBUfT2ehGBVJSvlUXd0Yo9fAmDQ6V14mWiNhmD9zg6/RE1EdrXzChMWoJMsuQDfOaHD4yzB/TGqPbmIWLW3MQkqnA3IXyYvEI8pKwpkGTQ1N5H34KYLLuj2FNr5zCHKJkTcMbK2+HW0gfbdVEGqURKNIZRT9lmxusOZPIJJ3IDoX1sG55cw+VgykEwH1wf32hdRcqKf+EYZP6Unhwk/qQwBtzS7ysteGpb9neI9a47OxeuS1j9GcQZ0bK74r1L5Ag4vqYNjhUX3TPAyMfhMaYNxOLP/Qj5p8U+8NAvjD40xFwWGtUVK8QgDVHTdPNaMR6x8bHIJtYPtrmnPE9woATmJnBrm0vzXeQ2FBNG5T9jG28hpiOmX4QQqrcn8HjIRLIxTWHI+VgCngdACtZQ0xP5FMZ3agGnUM6dJ8mh4rDfKSYjbjXPR5xy9evPnTIUevE6daEDQIt2ACHs1ofbAdgCoISAqTs6qF+gOZ+3Y2bIWQDdgsDtHWdwy46mMag8wVz97XyDDqDwciwiy5NgNI+LKd9w6HqMB+oxFTvgK0vlxc66Xdj7umUB0/s0JU61kdKvDpG+YQ4YG7Aw4YGbPGRQW4xelPqjrwqOvckRDvA4aExNKOL8SUmSGfIsrJCshUmbuYd2QrAF2Hby1sOu+iyzyByWrPevFJEht3VZVeafyldT+GWTQ6Vt6BpqAwauC/2UCjihlYY65/UZrqJcOlwMT0wi00Ou1jSE/ZSG8wdiPgixvvTjTtQQzqqS8S/SlkrJ6gDz1Q7DMC/oHontIgZOnCbrtSQQjJ0JHzYwyaHb0wfaE8+5rzx+uia5ugeJl1ZwwhHLGGnzQp8pyaH+nf9IPfJweMJXFnw1XjQBtKaVdqimOjEHBnJbznswjPlZkGfCo5gzwqK3VaVLCmmHxRG7F40QR+vOFSeudSw8GMnpBIybnsCNPT4Owhm6EaI2musOLnisJPe+iEsHGVGI4TSGFNRnQSk9aEkZ3aHwy7AFPNB0NDJaY3iuhcejeozNSS32qnlPQ5VH0AhUR9GLswFHbYpLxGq6FL2AAbJvuZQfc5UA27ACvkCWlbo4yDwdDEZBfPdBGG7exx2gm4hlgWhfoQY2Wsind/FxMk1E7JC5Qq3HHbhme7wxBkD3lKbkieDO9qFV4ryj+lgdMH31xx6XQzxWKBo2IQAM1I/NIfdDAyzViLQBbsxb3JodjNrJsJQfk6at6DIBuLwZ9VSn94K/2uTWYfkvlXnUDe68NmAUON2xGFxMfh95fOJijyt8VAih1ouGXQL/NjO1M+3HEF0sSEOLYJQ+EFBP1mTQph5ZFRXTWnUgJh/NkG3P0rGXUzwyrECS0cORckpcqj4NqI1s5pDlFHKjcbVEm5bYkNVe6cBqN6WZoOJaj1Ue6U3OcipOZVjNu+hmQr4WjpCIebyICpTKz8++InnvuQQjIRyDhfVML7LnJCFD5MQMtO5KKec58NWSpXRBQMhOIzJq1DN4bw6nWgED5Em8bX6JBN/11OpjMjhjDh08DztqJjDRPLXu/hJDdO+jX35m0QeeytURg9UAzogiMONcg6rGWs4uQrpkA28yqM44QRPX9jfHzkTW93hbHbD4VQlh+tqnukFP6xBzRxNRUJxJHZtKkEpUOUB3HK4UMhhIbekJqHoBF9G5cpBOiwQ51/VDChFaZu6lCaqObQlxkwK+dEB0aQ+tnovXbee2MadWJaRmvgGkUZwGF44VGLxq+1JK2RZgI0fY+ByhpMY4HRdqarQxpmcAaUkSPVrHO7RWqjisDLzw0skNh/CyHb8bTk8QQUh7mY13VWOtnMkywqUcQUcrisObcFh23GGt7RY3T4lV4OegVcOx9jOtR6xEQYVtlRYMZ5QSur4+yguB1wWFn+DdmiLHH4bW+zk6L+aZTO4vCIDO+AeODzjHH7YuGkpnDYxtFdKav/rqNEER0NwuMBMN1qL0ZctHmJWVs0IapErAGZJ4guxxZZwE2OLhdQ+l5w2KanfJt/7cAXB4Qx1O8Lbf1eUKLGj5qYtJgEWIM1SOQ90I4IaFGUcvCH81x5to7T+7nfJDaxuEdHTlB4JL/uN/K8FcNTzEpaHP0RxdWQIe1hxyPQM5DcWpQs0zXYtdnXyzXJPMcbHpLcB2b7qKOoL31fGCH4tRChsPI7c198H8QPNT5cfcQjxVjjfA8JfIanDLzoiNhgwiRifw85Ecvh5rk2MwmsOpUVB2/isTlalh4IGIJ1ykC6OCq4k9XNPPMTdsgSHARZHoSPycepSRvM3Yr7IWJNuOOSRIYhOSFzRAHY5YvPjsJhcUZGJgtyCJlILHw4BkCFedn1GTi+gecUhpaTWBn2cIlfCT/U/DIsNzBvuhSA4WNSCYP7ZEbAYDD26kYBkcM3KAw6Znk4rJydH9P2h7w6Kjx7JZeZBBKl7MUaNas8+OnuyCAqD6+We37xwRnA4u/e+uZ7DH2lOcIXZOTmP+SPjj416xFOBZ7SJ4PeTWX8h7ci1id64d9ggDtf336gHb8uIHFyuCepzPLp75TeIO6RgH1AmzpjNKMVZ9Ad9CDSkZ3BlZ87prSQigcV/wCEXg52EJh3ZEoM83dZ4Y9G6ILbApg3QD8eLtTUXEe2U24SYyLkBmDqH0+Gj36IL/oMPhqOmjySpedvThgSFew0WDE9MfPyfyUatYzMy8/2roNV+8ioyqDqZPnnflW5wqQrxD9AaJvTurpbGnwZDoEuDBQQlBhUBc9seAs9xM1ZF48Pdg7eOEZmcgePjPeQ0jCPxGjAftnFD4NPO+E+wpQKhBZNbIep/xvyWeQzyrtKGliy8h4/O4F1xKG+b9CmPuS0sRx/sj8hStUnDzXq4dajRKF9UGE2hTwuJxws0ncep8QBg8E+zS59DtHef/CWDgGQPso4xFeVTW+TEN6Rul2ozHkxlKLUv54LUaIvC2Eg4RMljBdP98Coc2jp37aUgj+srOERDMIc0qfz9NJxzSeOLI1EXfO/DkHG0eVcRyeVomKr96uHzju+/QtVKHy/JyFiTyGccI6ZkQt51m330Q9ErFWpXYv3chC39WofCU8LXBwzq3TWF/+hZ9cx6aNCm+4dfw+QVhMcDUATSoTehXsdoCS21OPY64a4aLEneDILxy3UndnsdQlTs+eELez1z8gffxQQkvEsHPPolyrT/Tv2rVVNDqXX40Zzb27cU8Qhmvm4Ej48sfP7eC36th2+E9C1tzS1HvpNZ5VoK6CEZGGcfEJ/khvmArhEbcvfmdQMEmvlJbTJ7eH8TetnubXdrbT+S1uysnXzaFPSA35h5TyMisRBDl585IkTcpK97rfBgsJZssu4DjG+39OK3zn1XqF9GcAYARwQnXMpXQeyUHBfc8qos8IQeacnKn5d1UWDma/ns4q6Fz8uP6las7K4nAKnVkjjDx34R+dsUcV2B/QAs4oLHh/3n1ZAYzQfV48+MO2GCmX1+frQO/XuewGoPlgPuG4I3vXq6fh7rT0UWqhYreXhmMWSz7Olr32ayr54ovgMQraXzmhblPWnlPqqVg3wtQSnMJ12gBzLqCPc1J3SP8JOxuHiWjtoM657F/vZJJo6SE86f7A42c8hJepBIwGd/rEtzqs9HW1GDi0Mf0MriSGo+FlPAMlfukHUDfoNUXVncNLmVVg45UQq5R/sK65rksZ5GxbrNhl8XSk6jIYvSh10lsHYSx25CiJG7V1xjeLqV1nGinVxvRpIa3H/MYw+ZJyGtQ5KNxjFjyekRHLuXNwQdyn7z1qukiwq8yPKuN3JiaXN/TgyMi3tfsmnQF4JyM3WIRnXH0TS/28YCZl7mS5Impg8+Mw1vURRex9PuSYudqbYfPvDEA3x8mvLTTB65CDwmm5b3ji/2vepMsBlCDL2u335aXEmrnq1nYaFtAQduPfEz+Z1oN6+6N3cIQSmLF3cSw06Vmj01ACYIu6oPrVM0b0rrsIzOC5LUmzO4Eg+yadbVdRoSQXTJ444V61+F03xFPJTQcz2EyJ1/97rsadKQHBPlE/zH8ZVrb+K+UkXWtWE3sJ+bB4nXkf52JWoJDs4FYEyFpuE9Ohn1MwI8zTlzJR01PPGE8jAUaV1foUCxDvneNkd9WaZArUsIobt2F+Xnr4hLa80TcCG6Ma6EcYL+DHUe3gYhEww69DEI5cVUhqKaflOJSR7/3svcZ7W3PeNpDpxbXmBjTqYCjfWd0hmSToNZp1reNCUvbiktvGkoH0DUkpZG5Q2PnEhbw2BUaa5WeLaEdSV3Q/khHNjAMF4xUYkruI+1LWsRQvS8ThoyWtPelYAwDlFSRU5cuKT0uvl7AQDNGXIZGAcU7mLMvGkVQgSJ+pL6T2kbS2kNLDDW5IfleKaGXXj3k1YH7Mq1WLzW0fzbOmw1hRBmh47LZ3RKBey4Z3iRjov1j6BR6V1TQeThJgYm+KAhjJfY0ClE74uYtkvau6Q9xjEF86yjq71FCX4QehRiE+dcoMcuC6ZLF/OBXUx2UENCWs2YTlNBNGkLH/laLoaWeYBDWjPwYHLnr0nnNVG4PEFOq2Kdh+c4P9yMHLnBnIOfVrJR9tum4T3aiwAEcod4ZPukBd5HFA1MrpF6N7163dCCZFMmoJ5k/3lcxd1u7vV4o2465bsizP+OxXCPp1WkATpBPjtZ6gfRdkn4WvtIvA/s6ckEZHAsfEN465dg/SZZxBdVCLwYteExmoq9h/n0xT95PAUUkAUkbXyhXVDw7WhHNo5oAvj/gkJSqYJ8nFd/bWCLvEPdpV20r6unQ5/GsaJNHL30ng9DDI/HrABV7DrPpIRcggwqAX2jI4VeAbyDfRevMv3jFFK/Pc22fWsAHFfb/oFzV4rxdX+clj3Kf1I89VaEB/VgrhaNOCid+39eFaOc4MJ4V0aBbLQuIcsjcG+6mQmgjFwqi929h6OSMmxuwZeYxgpfvdYFcRMI7wSmgZot3tCdg4GZDgFKM5Z3MeJMEcErcyG+o+iiRTcFzDvK+M73zuCkdjKYRwnZ4tVfpIStvMw5mgwDoPQw6WYyjwIC5YPcOzncLSeFOtxknLi14OsyM7uYD62ArD4JJs1Ab6GERBkMxlqiV7PQ/6TN+OmRz3WmbGf7g5QV7DuH0i1mN/4ei4Ww9Acy9R/0+xzHgDYumxywVuOvBYtQGIJes/sqcfGYFphLHiPO7P/aLlpCRCmH/ykWnmBG3mGEOLPraDreh7TXhfUjO/GxPYPkwO6HJNTuZjLmZ2QzcQJIEdPg8wZmtKgJObT83/4fyX5zT0b/Ef9gX/YvJ/Am5stLrFt3r3RCcJ5WwD/EBJXiq6vFYBYDOjMu+qyn/s0JrYmD5xjDQNrBr4f28ctMZgPhPJjVAIRfozO30yvUFtG4+n1058AEkj7TsX1+3MkbPloQTIHxsfTFUMUgsuhzHdTxHMP/XWWMq4OlTB2DqNBuLK9mqBjq8CFhiTIeaMteaFVPEvJdXEnfDwDM+xWzcZrICqHZRC2D6LTp1ZnHhjtM5i8kUqEXcYAasjTVoGidClEWgM4pdo7etKZ3TDj3hHKbovV4qPb89ixqIEnNoSeho8GcD2hvVsdmAkTHqkuzjuIo2ceSNgtfcPTPDsGxeY0KQKei/nPSQWmdwGcqeISCcNFy3T2Fw0p6LKGC3aSO5CA9Ek+cwGZ2MQX4ihawayZVFcg5W10trVxAMha4jdi12yXRvAzqNl4ITRl2MT9a3E7cQvSVUEnmqrv7ifE8YmaKnASnbDLfXRJAJnMaIU156Mo6hqAJYnRfNdCta+WX87xy2rmI2rfzRP3w+GkM/PUFQ7GouPxm9NCbdJTVtBnlDrZUHzBw1BZnrktYSl1MWl6umjftmGzRHCCmrMkuYN1VV2O0gZIl1hPDeA9ykMjwX1UxTaVKrMQdZ2lfbKQKR2OaYNF8Li2RI9st/mW2z5bF1r5Iaxxi4dYF8Xfh42GPFfmXCQyh7Jm5nULVKR2r2ZXV0M652Fk9iD925+bU1u3b0q+3ZQ/E6MMhVl9QNYiVuXJxD1WzwDBr3623iGlYhp9UX71MmjK6eNHHSwqr+wdVpebCWUmtWWX28s3nWhdJhhcbuhc3cOZUTXLerxXRO1Wncx5XjsY2dKuWiLFvhNbTx1vswnRFrEyMGlTuvOraftEZA6/pMkqWjfxLyW20jN1Lk1TfnGSGk+wWMyl+h+l2Y8eO4Y6HYsfH2b7mi0XxZYpB0KVT+A5FtY71UaPf6zgvPfPZGBr5rcBoTrkJay2A3l/Ish/KWte6me2bXgeXQicL8nwwMM2eoKE5GI/zic93Ntw1Zfhc78g3y79SdBYl9Wk6PT8p7v3V4bCerYFmxwc4uytXtQ7jLnzdL6hozm/p+07R7gIbJ6gPaOinf7BPILmeATLxHGv7ch+OW8vxrt4B5f02ujwibgxvcGQcuKmT2POdVSwX59mUaH1eLDe7fZwFk+tpH8ObkVJ/ixbO43ltut7vS7Dp63dRlpvEP1xjVtEufTJ17zH1vb+9eU2a7svgyfDAaxrmafgXDF9bOu0dd3VnSmt93/LAc+anP2UWWtN6adllalxTWibz0+wfiOV/g4+VU32kZr8AAAAASUVORK5CYII="
            />
            <p
              className="text-light"
              style={{ alignItems: "flex-end", margin: 10, display: "flex" }}
            >
              Mercedes Benz
            </p>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 25,
            }}
          >
            <h6 className="text-light" style={{ fontSize: "12px" }}>
              © 2022. Mercedes-Benz AG. Bảo lưu mọi quyền (Thông tin xuất bản)
            </h6>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Từ khoá tìm kiếm / OnlineCode từ công cụ chọn cấu hình xe"
                style={{
                  fontSize: "15px",
                  maxWidth: "100%",
                  paddingRight: "15px",
                  borderRadius: "5px",
                }}
              />
              <button
                style={{
                  position: "absolute",
                  right: 0,
                  top: "5px",
                }}
              >
                <PhMagnifyingGlass />
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: 5,
            border: "1px solid grey",
            borderLeft: 0,
            borderRight: 0,
            backgroundColor: "black",
          }}
        >
          <nav
            className="nav"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="#"
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <MaterialSymbolsDirectionsCarOutline />
              Các dòng xe
            </a>
            <a className="nav-link text-light" href="#">
              Mua trực tuyến
            </a>
            <a className="nav-link text-light" href="#">
              Tự vấn mua xe
            </a>
            <a className="nav-link text-light" href="#" aria-disabled="true">
              Dịch vụ
            </a>
            <a className="nav-link text-light" href="#" aria-disabled="true">
              Thế giới Mercedes
            </a>
          </nav>
        </div>
        <div
          style={{
            padding: 5,
            border: "1px solid grey",
            borderLeft: 0,
            borderRight: 0,
            backgroundColor: "black",
          }}
        >
          <h6
            className="text-light"
            style={{
              fontSize: "16px",
              margin: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Khám phá những{" "}
            <Link
              href="/voucher"
              style={{ margin: "0 5px", textDecoration: "underline" }}
            >
              ưu đãi tốt nhất
            </Link>
            tại cửa hàng trực tuyến
          </h6>
        </div>
      </div>
    </div>
  );
};

export default navbar;
