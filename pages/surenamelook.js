import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";
import Link from "next/link";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};


const records = [
    { surname: 'Alferman', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1801', end: '1960' },
    { surname: 'Altman', county: 'St Charles', state: 'MO', country: 'USA', begin: '1860', end: '1870' },
    { surname: 'Amptmann', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1800', end: '1950' },
    { surname: 'Amrein', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1834', end: '2017' },
    { surname: 'Arens', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Arens', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Arth', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1853', end: '' },
    { surname: 'arth', county: 'st. charles', state: 'MO', country: '', begin: '1850', end: '1900' },
    { surname: 'Ashby', county: 'ST. Charles', state: 'Missouri', country: '', begin: '1810', end: '1900' },
    { surname: 'Auchli', county: 'St. Charles', state: 'Missouri', country: '', begin: '1834', end: '1900' },
    { surname: 'Audrain', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1816', end: '' },
    { surname: 'Baldridge', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Barnes', county: 'Lincoln', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'beckmann', county: 'St Charles', state: 'MO', country: '', begin: '1840', end: '' },
    { surname: 'Berry', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Besterfeldt', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1851', end: '1900' },
    { surname: 'Beumer', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Bezzenberger', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1850', end: '1900' },
    { surname: 'Bloebaum', county: 'Saint Charles', state: 'Mo', country: '', begin: '1846', end: '2000' },
    { surname: 'Bloebaum', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'boeding', county: 'St Charles', state: '', country: '', begin: '1840', end: '' },
    { surname: 'Boettler', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Boone', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1725', end: '1799' },
    { surname: 'Boone', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1800', end: '' },
    { surname: 'Borgilt', county: 'St. Charles', state: '', country: 'USA', begin: '1830', end: '2018' },
    { surname: 'Borgmeyer', county: '', state: 'Missouri and Minnesota', country: '', begin: '', end: '' },
    { surname: 'Boschert', county: 'St Charles County', state: 'MO', country: '', begin: '1831', end: '1900' },
    { surname: 'Bowen', county: 'Cape May & Cumberland & Salem', state: 'New Jersey', country: 'United States', begin: '1825', end: '1921' },
    { surname: 'Brent', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Bricker', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Bricker', county: 'Lincoln', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Brinkmann', county: 'Missouri', state: 'Missouri', country: 'United States', begin: '1860', end: '' },
    { surname: 'Broadwater', county: 'Missouri', state: 'Missouri', country: 'United States', begin: '1825', end: '1940' },
    { surname: 'Brown', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1840', end: '' },
    { surname: 'Bruns', county: 'Saint Charles', state: 'Missouri', country: 'United States', begin: '1830', end: '2020' },
    { surname: 'Buerges', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Bull', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Burgemeister', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1839', end: '' },
    { surname: 'Callaway', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1800', end: '' },
    { surname: 'Capps', county: 'Lincoln', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Caraker', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Clouting', county: 'Cape May', state: 'New Jersey', country: 'United States', begin: '1829', end: '1916' },
    { surname: 'Conoyer', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Corson', county: 'Cape May', state: 'New Jersey', country: 'United States', begin: '1690', end: '1861' },
    { surname: 'Cox', county: 'Monmouth & Hunterdon', state: 'New Jersey', country: 'United States', begin: '1713', end: '1875' },
    { surname: 'Delger', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'Denker', county: 'St Charles', state: 'MO', country: 'USA', begin: '1840', end: '2023' },
    { surname: 'Doll', county: '', state: '', country: '', begin: '1850', end: '1910' },
    { surname: 'Doll', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'Dorlaque', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Dove', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Drummond', county: 'Philadelphia', state: 'Pennsylvania', country: 'United States', begin: '1807', end: '1919' },
    { surname: 'Duncan', county: '', state: 'Kansas', country: '', begin: '', end: '' },
    { surname: 'Ehlmann', county: 'St. Charles', state: 'MO', country: 'United States', begin: '', end: '' },
    { surname: 'Ehlmann', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Ermeling', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Farley', county: 'Amelia, Bedford', state: 'Virginia', country: 'USA', begin: '', end: '' },
    { surname: 'Faulkner', county: 'New York', state: 'New York', country: 'United States', begin: '1790', end: '1860' },
    { surname: 'Fetter', county: 'Saint Charles', state: 'Missouri', country: 'United States', begin: '1792', end: '2020' },
    { surname: 'Fluesmeier', county: 'ST. Charles', state: 'MO', country: '', begin: '1836', end: '2019' },
    { surname: 'Gannaway', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Gant', county: 'Warren and Saint Charles', state: 'Missouri', country: '', begin: '1840', end: '1923' },
    { surname: 'Garcia', county: 'Philadelphia', state: 'Pennsylvania', country: 'United States', begin: '1843', end: '1980' },
    { surname: 'Gaty', county: '', state: '', country: '', begin: '1798', end: '' },
    { surname: 'Giessmann', county: 'Saint Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'Gosney', county: 'St. Charles', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Graham', county: 'St. Charles', state: 'Missouri', country: 'US', begin: '1850', end: '1900' },
    { surname: 'Grandehn', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1936', end: '1938' },
    { surname: 'groeblinghoff', county: 'St Charles', state: 'MO', country: 'USA', begin: '1848', end: '2023' },
    { surname: 'Gronefeld', county: 'St. Charles County', state: '', country: '', begin: '', end: '' },
    { surname: 'Haferkamp', county: 'St. Charles County', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Hahn', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Hahn', county: 'St. Louis City and County', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Halbruegge', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1840', end: '1980' },
    { surname: 'Halter', county: 'St. Charles County', state: 'Missouri', country: 'USA', begin: '1834', end: '2017' },
    { surname: 'Harrison', county: '', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Haverkamp', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Hayden', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1837', end: '1960' },
    { surname: 'HEITGERD', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1816', end: '1899' },
    { surname: 'HEITGERD', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1844', end: '1915' },
    { surname: 'Heitgerd', county: 'MO', state: 'MO', country: 'United States', begin: '1850', end: '2024' },
    { surname: 'Henke', county: 'St. Charles', state: '', country: '', begin: '', end: '' },
    { surname: 'Henry', county: 'St Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'hermann', county: 'st. charles', state: 'MO', country: '', begin: '1850', end: '1910' },
    { surname: 'Hiesel', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Hoeber', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'Hoelscher', county: 'St. Charles County', state: '', country: '', begin: '', end: '' },
    { surname: 'Hoffmann', county: '', state: '', country: 'Germany', begin: '1815', end: '2021' },
    { surname: 'Hollrah', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'HOLLRAH', county: 'St. Charles', state: 'Missouri', country: '', begin: '1797', end: '1854' },
    { surname: 'Hollrah', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '2022', end: '2022' },
    { surname: 'Holtgrawe', county: 'st. Charles County', state: '', country: '', begin: '', end: '' },
    { surname: 'Howell', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1798', end: '' },
    { surname: 'Hunn', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Hutchings', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1812', end: '' },
    { surname: 'Hutchings', county: 'St Charles', state: '', country: '', begin: '', end: '' },
    { surname: 'Iler', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1817', end: '' },
    { surname: 'Irwin', county: '', state: 'MIssouri', country: '', begin: '1880', end: '1893' },
    { surname: 'Jungermann', county: 'St Charles', state: '', country: '', begin: '', end: '' },
    { surname: 'Kalb', county: 'St CharlesCounty', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Karle', county: 'St. Charles', state: 'Missouri', country: 'United States', begin: '1850', end: '1900' },
    { surname: 'Kasper', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Keller', county: 'ST. Charles', state: 'Missouri', country: '', begin: '1800', end: '1900' },
    { surname: 'Kersting', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'Kettelhake/Kettlehake', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Klinger', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1830', end: '1900' },
    { surname: 'Kluesner', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Kluesner', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Knoblauch Elmendorf', county: 'St Charles', state: 'missouri', country: 'usa', begin: '', end: '' },
    { surname: 'Knoernschild', county: '', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Koenigsfeld', county: 'Osage', state: 'Missouri', country: 'United States', begin: '1830', end: '2020' },
    { surname: 'Kruel', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Kuhlmann', county: 'St. Charles', state: '', country: '', begin: '', end: '' },
    { surname: 'LaBarge', county: '', state: '', country: 'United States', begin: '1750', end: '1925' },
    { surname: 'Landwehr', county: 'St Charles', state: 'MO', country: '', begin: '', end: '' },
    { surname: 'Lauber', county: 'St. Charles Cty; Lincoln Cty', state: 'MO', country: '', begin: '1864', end: '2017' },
    { surname: 'Lloyd', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Lock', county: 'Osage', state: 'Missouri', country: 'United States', begin: '1830', end: '1820' },
    { surname: 'Lucas', county: '', state: 'Kansas', country: '', begin: '', end: '' },
    { surname: 'Ludolph', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1820', end: '2017' },
    { surname: 'LUERDING', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1834', end: '1900' },
    { surname: 'LUERDING', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1867', end: '1959' },
    { surname: 'Mader', county: '', state: 'Pennsylvania', country: '', begin: '', end: '' },
    { surname: 'Manning', county: 'New York', state: 'New York', country: 'United States', begin: '1775', end: '1955' },
    { surname: 'McDearmon', county: '', state: 'Missouri', country: '', begin: '1830', end: '1960' },
    { surname: 'McKay', county: 'Saint Charles', state: 'MO', country: '', begin: '1820', end: '' },
    { surname: 'Menton', county: 'St. Charles Cty; Lincoln Cty', state: 'MO CA', country: '', begin: '1865', end: '2017' },
    { surname: 'Mertens', county: 'Osage', state: 'Missouri', country: 'United States', begin: '1830', end: '2020' },
    { surname: 'Meyer', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Middleton', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Miller', county: 'Saint Charles', state: 'MO', country: '', begin: '1820', end: '' },
    { surname: 'Mispagel', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1850', end: '1920' },
    { surname: 'Moehlenkamp', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Moeller', county: 'St. Charles', state: '', country: 'USA', begin: '1830', end: '2018' },
    { surname: 'Moellering', county: 'St CharlesCounty', state: 'Missouri', country: '', begin: '1850', end: '1925' },
    { surname: 'Moentmann', county: 'St. Charles', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Morgan', county: 'Lincoln', state: '', country: '', begin: '', end: '' },
    { surname: 'Mott', county: 'Philadelphia', state: 'Pennsylvania', country: 'United States', begin: '1748', end: '1923' },
    { surname: 'Mound', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1858', end: '' },
    { surname: 'Mound', county: 'St Charles', state: 'MO', country: 'USA', begin: '', end: '' },
    { surname: 'Muegge', county: 'St. Charles', state: 'MO', country: 'USA', begin: '', end: '' },
    { surname: 'Muschany', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1840', end: '2018' },
    { surname: 'Nadler', county: '', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Nolle', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Obering', county: 'St. Charles', state: 'Mo', country: 'US', begin: '', end: '' },
    { surname: 'Ohmes', county: 'St. Charles Cty; Lincoln Cty', state: 'Missouri', country: '', begin: '1835', end: '2017' },
    { surname: 'Oldenburg', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Olson', county: 'St Charles', state: 'Mo', country: '', begin: '', end: '' },
    { surname: 'Orrick', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Peters', county: 'USA', state: 'Missouri', country: 'USA', begin: '1839', end: '' },
    { surname: 'Pitman', county: 'St. Charles', state: 'MO', country: 'United States', begin: '1700', end: '1946' },
    { surname: 'Pitman', county: 'St Charles', state: '', country: '', begin: '', end: '' },
    { surname: 'Powell', county: 'Burllington', state: 'New Jersey', country: 'United States', begin: '1815', end: '1911' },
    { surname: 'Rehker', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1800', end: '1970' },
    { surname: 'Robertson', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1817', end: '' },
    { surname: 'Roth', county: 'St. Charles', state: 'MO', country: 'United States', begin: '1850', end: '1900' },
    { surname: 'ROTHER', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1899', end: '1987' },
    { surname: 'ROTHER', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1926', end: '2008' },
    { surname: 'Rowe', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Ruenzi', county: 'Saint Charles', state: 'Missouri', country: 'United States', begin: '1820', end: '2020' },
    { surname: 'Rufkahr', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Runkel', county: 'St Charles', state: 'MO', country: 'USA', begin: '1855', end: '1870' },
    { surname: 'saali', county: 'St. Charles Cty; Lincoln Cty', state: 'Missouri', country: '', begin: '1835', end: '2017' },
    { surname: 'Sachs', county: 'Saint Louis', state: 'Missouri', country: 'United States', begin: '1792', end: '2020' },
    { surname: 'Sandridge', county: '', state: '', country: '', begin: '', end: '' },
    { surname: 'Schappe', county: 'St. Charles', state: 'MO', country: 'USA', begin: '', end: '' },
    { surname: 'Schellert', county: '', state: 'MO', country: 'USA', begin: '1865', end: '2017' },
    { surname: 'Scherer', county: '', state: 'Missouri', country: '', begin: '', end: '' },
    { surname: 'Scherr', county: 'Osage', state: 'Missouri', country: 'United States', begin: '1830', end: '2020' },
    { surname: 'Schlueter', county: 'St. Charles Cty; Lincoln Cty', state: 'MO', country: '', begin: '1865', end: '2017' },
    { surname: 'Schmiemeier', county: 'St Charles', state: 'Missouri', country: '', begin: '1832', end: '1955' },
    { surname: 'Schmiemeier', county: 'St. Charles County', state: '', country: '', begin: '', end: '' },
    { surname: 'Schnitzius', county: 'St Charles', state: 'MO', country: 'USA', begin: '1843', end: '1870' },
    { surname: 'Schwegmann', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '' },
    { surname: 'Seigler', county: '', state: '', country: '', begin: '1840', end: '',city:'',alt:'Siegler, Sieglar, Seiglar',Notes:'' },
    { surname: 'Seigler', county: 'St. Charles', state: 'MO', country: 'USA', begin: '1835', end: '1880',city:'St. Charles',alt:'Siglar, Ziglar, Siegler, Ziegler',Notes:'' },
    { surname: 'Shawan', county: 'St. Charles', state: 'Missouri', country: '', begin: '1880', end: '1947',city:'Cape Girdeau',alt:'',Notes:'' },
    { surname: 'Shellenhamer', county: '', state: '', country: '', begin: '', end: '',city:'',alt:'Shellenhammer, Shellhamer, Shellhammer',Notes:'' },
    { surname: 'Siebermann', county: 'St. Louis; Calhoun;Greene', state: 'MO; IL', country: '', begin: '1850', end: '2017',city:'',alt:'Shellenhammer, Shellhamer, Shellhammer',Notes:'' },
    { surname: 'Siegler', county: 'St. Charles', state: 'Missouri', country: 'United States', begin: '1829', end: '1922',city:'Black Walnut',alt:'Seigler, Ziegler, Siglar, Zeigler, Ziglar',Notes:'Also looking for information on 1903 Floor in Black Walnut, Missouri' },
    { surname: 'Simms', county: 'Cape May', state: 'New Jersey', country: 'United States', begin: '1846', end: '1947',city:'',alt:'Sims',Notes:`John, Etna.  Married Mary E. Clouting` },
    { surname: 'Smith', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1819', end: '1900',city: '', alt: '', Notes: `Capt. John H. Smith & Elizabeth Lyle = Earliest ancestors` },
    { surname: 'Spalding', county: 'St. Charles', state: 'Missouri', country: '', begin: '', end: '',city: 'St. Charles', alt: 'Spaulding', Notes: 'William Spalding was born in St. Charles about 1838. He is possibly the son of Thomas Spalding (b. 1785), who was in St. Charles as early as 1817. William married Martha Ann Baldridge, daughter of Joseph Logan Baldridge and Mary Ann Gosney Baldridge, on Aug. 26, 1860, in St. Charles. William died in 1870 while working to build the Wabash Railroad bridge over the Missouri River.  He left two sons. HIs widow remarried Elijah Randolph on Nov. 1, 1880, and with him had a third son. She lived to age 90 and died in St. Charles on Jan. 1, 1929.' },
    { surname: 'Spaulding', county: '', state: '', country: '', begin: '', end: '', city: '', alt: 'Spalding', Notes: '' },
    { surname: 'Stock', county: 'St. Charles', state: 'Missouri', country: '', begin: '1865', end: '1920' },
    { surname: 'Stonebraker', county: '', state: 'Missouri', country: '', begin: '', end: '', city: 'Portage des Sioux', alt: 'Stratman', Notes: `Stonebreaker` },
    {
        surname: 'Stratmann', county: '', state: '', country: 'United States', begin: '1800', end: '1925', city: 'Portage des Sioux', alt: 'Stratman', Notes: `Stratmann's also from Cape Giredeay along with Shawan family
` },
    { surname: 'Sudbrock', county: 'St CharlesCounty', state: '', country: '', begin: '', end: '', city: '', alt: '', Notes: '' },
    { surname: 'Swagman', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '', end: '', city: '', alt: '', Notes: '' },
    {
        surname: 'Tarbell', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1840', end: '', city: '', alt: `Tarble
Notes / Comments:	
Earliest Tarbell ancestor coming to St. Charles County was Josiah Woods Tarbell, b. abt 1816, Kennebec Co., Maine, d. 14 Feb 1848, St. Charles Co., Missouri, son of Josiah Tarbell and Sophia 'Sophronia' Hanson, who married Mary Ellender Smith, 14 Apr 1840, St. Charles Co., Missouri.  Mary was b. 11 Nov 1819, St. Charles District, Missouri Territory, d. 05 Oct 1884 Callaway Twp., St. Charles Co., Missouri, daughter of John Smith and Elizabeth Lyle.
   Josiah Woods Tarbell and Mary Ellender Smith had 2 children that lived to`, Notes: `1. Mary Elizabeth Tarbell, b. 15 Aug 1842, St. Charles Co., Missouri, d. 18 Mar 1885, St. Charles Co., Missouri, m. Thomas Jefferson Howell, b. 18 Nov 1829 - 1831 St. Charles Co., Missouri, d. 12 May 1904, St. Charles Co., Missouri, son of Benjamin Howell and Mahala Castlio.  6 children: Lillian Smith Howell; Eleanor Irene Howell; Thomas Watson Howell; Mary Virginia Adene Howell; Junia Elizabeth  Howell and Hubert Lee Howell/  
2. Josiah John Smith Tarbell, b. 20 Jul 1845, St. Charles Co., Missouri, d. by drowning in the Missouri River, 26 June 1870, Darst Bottom, St. Charles Co., Missouri, m. 07 May 1865, Laura Anne Elizabeth Yarnell, b. 1849, St. Charles Co., Missouri, d. 1874, St. Charles Co., Missouri, daughter of Memory Yarnell and Amandelia Howell.  3 children; Josiah John Tarbell married Anna Sarah Peters; George Lee Tarbell; Mary Virginia G. Tarbell married David Gentry Lowder. `
    },
    {
        surname: 'Tayon', county: '', state: 'Missouri', country: '', begin: '', end: '', city: '', alt: `Taillon, Michel dit Taillon
`, Notes: ''
    },
    { surname: 'Thoene', county: 'St CharlesCounty/St Louis', state: 'Missouri', country: '', begin: '', end: '', city: '', alt: '', Notes: '' },
    { surname: 'Tiedemann', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1849', end: '', city: '', alt: 'Ultzen', Notes: `Lehr ' Leehr' Tiedemann & Caroline Burgermeister = Earliest Ancestors` },
    { surname: 'Townsend', county: 'Cape May', state: 'New Jersey', country: 'United States', begin: '1690', end: '2017', city: '', alt: 'Townsen, Towsen', Notes: 'Richard Townsends from Oyster Bay, Long Island, Colonies.    Brothers are John and Henry' },
    { surname: 'Trendley', county: 'St Charles', state: 'Mo', country: 'United States', begin: '1771', end: '1850', city: '', alt: 'Ultzen', Notes: '' },
    { surname: 'Ueltzen', county: '', state: 'Missouri', country: 'USA', begin: '', end: '', city: '', alt: 'Ultzen', Notes: '' },
    { surname: 'Van Burkleo', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1798', end: '', city: '', alt: `Burkelo, Van Burken, Vanburkelow, Van Borculo, Vanberkelow. William and Mary (Hirons) Van Burkleo moved to "Petit Cotes" soon after coming to Missouri in 1798. Their first two children had been born in Kent County, Delaware, and at least the next three children were evidently born in Kentucky, where "William Van Borculo" was listed in the 1790 Tax Roll of Mason County. Two sons, who died young, may also have been born in Kentucky. Their youngest child, Mary, was born about 1801 in what would become St. Charles County.`, Notes: 'Many files on this' },
    { surname: 'Vetsch', county: 'St. Charles Cty; Lincoln Cty', state: 'MO MN', country: '', begin: '1835', end: '2017', city: '	St. Paul, St. Peters, St. Char', alt: '', Notes: 'Many files on this' },
    {
        surname: 'Walter', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1850', end: '', city: "St. Charles", alt: "", Notes: `Her younger brother Joseph Walter (1814-1850) was married in 1832 in Eberbach to Maria Eva Schwartz (1809-1887), and had also come to St. Charles, where he owned a saloon. Joseph and Eva had 7 children born in Eberbach before they came to the United States with at least five of them. His children prospered, and in St. Charles County married into the Mueller, Bucher, Heimer, Glosier, Boschert, and Kister families.`
    },
    {
        surname: 'Weber', county: 'St. Charles County', state: 'Missouri', country: '', begin: '1850', end: '', city: "St. Charles", alt: "", Notes: `Her younger brother Joseph Walter (1814-1850) was married in 1832 in Eberbach to Maria Eva Schwartz (1809-1887), and had also come to St. Charles, where he owned a saloon. Joseph and Eva had 7 children born in Eberbach before they came to the United States with at least five of them. His children prospered, and in St. Charles County married into the Mueller, Bucher, Heimer, Glosier, Boschert, and Kister families.
` },
    { surname: 'Weber', county: '', state: '', country: '', begin: '', end: '', city: "St. Charles", alt: "", Notes: `Lorenz Weber (1799-1873) was born in Eberbach, Alsace, France. He and his wife Margaretha Anna Walter (1803-1892) were married in 1822 in Eberbach. He was 50 years old when he arrived at New Orleans aboard the ship "Callendar" on 30 Apr 1850, with his wife and nine children. One son evidently came ahead of them, and at least two others died young before they left France. In St. Charles he owned Lot #45 Block 10 of Cunningham's Survey in the Commons. He also purchased 40 acres in the Evans Survey, Lot #1 of Block 6. His youngest daughter's 1926 obituary described the farm where she grew up as "by the Fischer farm near Boschertown."` },
    { surname: 'Weiser', county: '', state: 'Pennsylvania', country: '', begin: '', end: '', city: "", alt: "", Notes: "" },
    { surname: 'Werremeyer', county: 'St. Charles', state: '', country: 'USA', begin: '1830', end: '2018', city: "St. Charles", alt: "", Notes: "" },
    { surname: 'Westenkuehler', county: 'St. Charles', state: '', country: 'USA', begin: '1830', end: '2018', city: "St. Charles", alt: "", Notes: "" },
    { surname: 'Westerhold', county: '', state: 'Missouri', country: '', begin: '', end: '', city: "", alt: "", Notes: "My great grandfather Henry Westerhold married a Stock and through the years their family moved between Washington, Mo, St. Louis, Mo. & areas in St. Charles County mainly in Portage des Sioux." },
    { surname: 'Wilke', county: '', state: '', country: '', begin: '', end: '', city: "", alt: "", Notes: "" },
    { surname: 'Willbrand', county: '', state: '', country: '', begin: '', end: '', city: "", alt: "", Notes: "" },
    { surname: 'wille', county: 'st. charles', state: 'MO', country: 'United States', begin: '1830', end: '1990', city: "", alt: "", Notes: "" },
    { surname: 'Williams', county: 'St. Charles', state: 'Missouri', country: 'USA', begin: '1848', end: '1900', city: "St. Paul", alt: "", Notes: "" },
    { surname: 'Wilmes', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '', city: "	St. Charles", alt: "", Notes: "" },
    { surname: 'Wilmes', county: 'St. Charles', state: 'MO', country: '', begin: '', end: '', city: "Josephville", alt: "", Notes: "" },
    { surname: 'Windmueller', county: '', state: '', country: '', begin: '', end: '', city: "", alt: "", Notes: "" },
    { surname: 'Wissmann', county: '', state: 'Missouri', country: 'USA', begin: '', end: '', city: "", alt: "Wissman", Notes: "" },
    { surname: 'Wlllets', county: 'Cape May', state: 'New Jersey', country: 'United States', begin: '1698', end: '1914', city: "", alt: "Willits", Notes: "John, James, Nicholas, Moses, Sarah.   Also Burlington Co., NJ" },
    { surname: 'Wolf', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1800', end: '', alt: "Woolf", Notes: "Christopher Wolf/Woolf & Eve his wife = Earliest ancestor to St Charles District", city: "" },
    { surname: 'Wood', county: '', state: '', country: '', begin: '', end: '', alt: "", Notes: "", city: "" },
    { surname: 'Woodward', county: 'Burllington', state: 'New Jersey', country: 'United States', begin: '1808', end: '1957', alt: "", Notes: "Alfred, Lola.   Also Camden, NJ.", city: "" },
    { surname: 'Xander', county: 'St. Charles', state: 'MO', country: 'USA', city: "St. Charles", begin: '1860', end: '1920', alt: "", Notes: "" },
    { surname: 'Yarnall', county: 'St Charles', state: 'Missouri', country: 'USA', begin: '1816', end: '', City: "", alt: "Yarnell", Notes: "John Yarnall & Elizabeth 'Betsey' Wolf = Earliest ancestors to St Charles District" },
    {
        surname: 'Zeisler', county: 'Saint Charles', state: 'Missouri', country: 'United States', begin: '1830', end: '2020', city: "Saint Charles", alt: "Zeissler, Zusler", Notes: ""
    },
    { surname: 'Ziegemeier', county: '', state: '', country: '', begin: '', end: '', city: "", alt: "", Notes: "" },
    { surname: 'Ziegler', county: '', state: '', country: '', begin: '', end: '', alt: "Siegler", city: "", alt: "", Notes: "" },
];




const itemsPerPage = 20;

export default function surenamelook(pageProp) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(records.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = records.slice(startIndex, startIndex + itemsPerPage);

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    const [openIndex, setOpenIndex] = useState(null);
    const dropdownRefs = useRef([]);

    const handleOutsideClick = (event) => {
        if (
            dropdownRefs.current.every(
                (ref) => ref && !ref.contains(event.target)
            )
        ) {
            setOpenIndex(null);
        }
    };

    const tableRef = useRef(null);

    const scrollToTable = () => {
        if (tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const toggleDropdown = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };


    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="surname-container">
                        <div className="content-wrapper">
                            <h1>How To Look Up A Surname</h1>
                            <p>
                                The SCCHS Surname Directory is a collaborative tool giving all users a way to search for surnames of interest and to contact the SCCHS member who is researching the surname. There is no cost to use our Surname Directory and you do not need to be an SCCHS member to conduct a search.
                            </p>
                            <p>
                                To search the Directory, enter the surname you wish to search and then click on the magnifying glass icon -- you also have the option of flipping through the list using the page view.
                            </p>
                            <p>
                                Click on the eye icon and a new window will open with the Surname Detail (which can be printed). If you have a potential match, click the envelope icon, which opens the Surname Inquiry Emailer, and send an email to the member who posted the information to explore and collaborate.
                            </p>

                            <div className="image-section">
                                <img src="https://res.cloudinary.com/dgif730br/image/upload/v1745331971/image_ae6xyi.png" alt="Old street view" />
                            </div>

                            <div className="button-section">
                                <div className="label-box">To begin your search.</div>
                                <button className="start-btn" onClick={scrollToTable}>Click Here</button>
                            </div>

                            <div className="instructions">
                                <p>If you are a member, you may add a surname to the SCCHS Surname Directory by doing the following:</p>
                                <ol>
                                    <li>Open the <strong>MEMBERS</strong> page and login</li>
                                    <li>Open your Profile page,</li>
                                    <li>Open the <strong>Surnames</strong> tab,</li>
                                    <li>Select the + box and add the information about the surname you are researching,</li>
                                    <li>Click <strong>Save</strong> button (upper R/H corner of screen) to save your information.</li>
                                </ol>
                            </div>

                            <div className="instructions1">
                                <p><span>IMPORTANT NOTE TO MEMBERS:</span> The "Surname Inquiry Emailer" reveals no personal information (e.g., member's name or e-mail address) about the member.  All identification takes place after the email has been submitted to the server, where the necessary lookups can be done without concern and the inquiry sent to the member.</p>
                            </div>
                        </div>
                    </div>

                    <div className="memberList_filter" >
                        <div className="event-title-filter memberlist-title-filter tyile_filter">
                            <input type="text" className="search-input serach_inpp" placeholder="Search Surname" />
                            <button className="search-button">
                                <img width="28" src="https://res.cloudinary.com/dgif730br/image/upload/v1744279927/Mask_group_zicocm.png" alt="this is search image" />
                            </button>
                        </div>

                        <div className="filters-right">
                            <div className="listing">
                                <label>Listing Per Page</label>
                                <div className="custom_drop custom_drop1">
                                    <select className="dropdown small">
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>


                            <div className="listing" id="listingg">
                                <label>Jump to Page</label>
                                <div className="custom_drop custom_drop1">
                                    <select className="dropdown small">
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="record-info mem-record-info">
                        Records : <span>1 to 200 of </span> 976
                    </div>

                    <div className="scch-table-container">
                        <table className="scch-member-table" ref={tableRef}>
                            {/* <colgroup>
                                <col style={{ width: "25%" }} />
                                <col style={{ width: "30%" }} />
                                <col style={{ width: "45%" }} />
                            </colgroup> */}
                            <thead>
                                <tr>
                                    <th className="nh1">Surname</th>
                                    <th className="nh1">Country</th>
                                    <th>Stage/Prov./Rgn</th>
                                    <th>Country</th>
                                    <th>Begin Year</th>
                                    <th>End Year</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.surname}</td>
                                        <td>{item.county}</td>
                                        <td>
                                            <p> {item?.state}</p>
                                        </td>
                                        <td>
                                            {item?.country}
                                        </td>
                                        <td>
                                            {item?.begin}
                                        </td>
                                        <td>
                                            {item?.end}
                                        </td>
                                        <td ref={(el) => (dropdownRefs.current[idx] = el)} className="action-col">
                                            <button onClick={() => toggleDropdown(idx)} className="action-btn">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z" stroke="#AB0635" />
                                                    <path d="M16 14C14.9 14 14 14.9 14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14ZM16 8C14.9 8 14 8.9 14 10C14 11.1 14.9 12 16 12C17.1 12 18 11.1 18 10C18 8.9 17.1 8 16 8ZM16 20C14.9 20 14 20.9 14 22C14 23.1 14.9 24 16 24C17.1 24 18 23.1 18 22C18 20.9 17.1 20 16 20Z" fill="#49515C" />
                                                </svg>

                                            </button>
                                            {openIndex === idx && (
                                                <div className="action-dropdown">
                                                    <Link href={{
                                                        pathname: "/surenamedetail",
                                                        query: {
                                                            surname: item.surname,
                                                            city: item.city,
                                                            county: item.county,
                                                            state: item.state,
                                                            country: item.country,
                                                            begin: item.begin,
                                                            end: item.end,
                                                            alt: item.alt,
                                                            notes: item?.Notes
                                                        },
                                                    }} style={{ textDecoration: "none" }} ><div className="act_btn">
                                                            <img width={18} height={18} src="https://res.cloudinary.com/dgif730br/image/upload/v1745394773/Mask_group_1_u2msed.svg" />
                                                            <p>View</p>
                                                        </div></Link>
                                                    <Link style={{ textDecoration: "none" }} href={"/contact-us"}><div className="act_btn">
                                                        <img width={18} height={18} src="https://res.cloudinary.com/dgif730br/image/upload/v1745394773/Mask_group_3_zsyixz.svg" />
                                                        <p>Mail</p>
                                                    </div></Link>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td>1st Mo St Capitol, State Historic Site</td>
                                    <td />
                                    <td>sue.love@dnr.mo.gov</td>
                                </tr> */}
                                {/* <tr>
                                    <td>Achelpohl, John</td>
                                    <td>1118 Perry St. Saint. Charles, MO 63301-2904</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td>Ackmann, Mark</td>
                                    <td />
                                    <td />
                                </tr>
                                <tr>
                                    <td>Adams, Amanda</td>
                                    <td />
                                    <td>adamsamanda1@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>Adams, Kathy</td>
                                    <td>1330 Jonathans Trl Vero Beach, FL 32963-2367</td>
                                    <td>adamsiumd@bellsouth.net</td>
                                </tr>
                                <tr>
                                    <td>Adams, Rick</td>
                                    <td />
                                    <td>rrrussell@centurytel.net</td>
                                </tr>
                                <tr>
                                    <td>Adams, William T.</td>
                                    <td />
                                    <td>adams_terry@att.net</td>
                                </tr>
                                <tr>
                                    <td>Adamson, Steve &amp; Carolyn</td>
                                    <td>1253 Warren St. Placentia, CA 92870-3640</td>
                                    <td>
                                        (714) 996-9511
                                        <br />
                                        cjwadamson@gmail.com
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>

                    </div>


                    <div className="custom-pagination">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => handleClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            className="page-btn next-btn1"
                            onClick={() => handleClick(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <span>Next</span>
                            <svg width="6" height="12" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.13115 0.5L0.368652 2.2625L6.09365 8L0.368652 13.7375L2.13115 15.5L9.63115 8L2.13115 0.5Z" fill="#666D76" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export async function getServerSideProps(context) {
    try {

        const globalSettings = await GlobalHeaderFooter();
        return {
            props: {
                page_content: false,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            },
        };

    } catch (error) {

        return {
            props: {
                page_content: false,
                navbar: false,
                footer: false
            },
            notFound: true
        };

    }
}