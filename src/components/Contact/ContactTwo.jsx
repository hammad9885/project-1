import React from 'react'
import { FaFacebookF, FaLinkedin, FaTumblr, FaVimeo } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function ContactTwo() {


    return (
        <>
        <div className='my-[60px]'>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="col-span-1 bg-white p-6 rounded-lg shadow">
                    <img alt="Profile picture of Michael Dean" class="w-full rounded-lg mb-4" height="300" src="c1.jpg" width="300" />
                    <h2 class="text-2xl font-bold mb-2">
                        Michael Dean
                    </h2>
                    <p class="text-gray-600 mb-4">
                        Roof Pros
                    </p>
                    <p class="mb-2">
                        <strong>
                            Email Address :
                        </strong>
                        tanya.hill@example.com
                    </p>
                    <p class="mb-2">
                        <strong>
                            Phone Number :
                        </strong>
                        308.555.0121
                    </p>
                    <p class="mb-4">
                        <strong>
                            Address :
                        </strong>
                        6391 Elgin St. Celina, Delaware 10299
                    </p>
                    <div class="flex space-x-4">
                        <a class="text-gray-600 hover:text-green-600" href="#">
                            <FaFacebookF />
                        </a>
                        <a class="text-gray-600 hover:text-green-600" href="#">
                            <FaTumblr />
                        </a>
                        <a class="text-gray-600 hover:text-green-600" href="#">
                            <FaXTwitter />
                        </a>
                        <a class="text-gray-600 hover:text-green-600" href="#">
                            <FaVimeo />
                        </a>
                        <a class="text-gray-600 hover:text-green-600" href="#">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div class="col-span-2 space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold mb-4">
                            Work Experience
                        </h2>
                        <p class="text-gray-600 mb-4">
                            The first currency in the pair is the base currency, and the second is the quote currency. The quote shows how much of the quote currency is needed to buy one unit of the base currency. This is ipsum dolor sit amet consectetur adipiscing elit.
                        </p>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-600 mr-2">
                                </i>
                                Innovative Solutions for Superior Quality
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-600 mr-2">
                                </i>
                                Excellence Driven by Innovation
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-green-600 mr-2">
                                </i>
                                Innovative Approaches to Superior Craftsmanship
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold mb-4">
                            Education Background
                        </h2>
                        <ul class="space-y-4">
                            <li class="flex items-center">
                                <i class="fas fa-circle text-green-600 mr-2">
                                </i>
                                <div>
                                    <h3 class="font-bold">
                                        School Education
                                    </h3>
                                    <p class="text-gray-600">
                                        The quote shows how much of the quote currency is needed to buy one unit of the base currency.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-circle text-green-600 mr-2">
                                </i>
                                <div>
                                    <h3 class="font-bold">
                                        Graduation
                                    </h3>
                                    <p class="text-gray-600">
                                        The quote shows how much of the quote currency is needed to buy one unit of the base currency.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-circle text-green-600 mr-2">
                                </i>
                                <div>
                                    <h3 class="font-bold">
                                        Post Graduation
                                    </h3>
                                    <p class="text-gray-600">
                                        The quote shows how much of the quote currency is needed to buy one unit of the base currency.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold mb-4">
                            Professional Skills
                        </h2>
                        <div class="space-y-4">
                            <div>
                                <h3 class="font-bold">
                                    Analysis
                                </h3>
                                <div class="w-full bg-gray-200 rounded-full h-4">

                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold">
                                    Optimization
                                </h3>
                                <div class="w-full bg-gray-200 rounded-full h-4">

                                </div>
                            </div>

                            <div>
                                <h3 class="font-bold">
                                    Branding
                                </h3>
                                <div class="w-full bg-gray-200 rounded-full h-4">

                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold mb-4">
                            Awards
                        </h2>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                Employee of the month
                            </li>
                            <li class="flex items-center">
                                Best Employee 2022
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}
export default ContactTwo;