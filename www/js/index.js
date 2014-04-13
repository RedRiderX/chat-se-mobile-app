/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
        // window.basePath = window.location.href.replace('index.html', '');
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $(document).on('click', 'a[target=_blank]', function (event) {
            event.preventDefault();

            alert($(this).attr('id'));

            if ( $(this).attr('id') == 'launchSite' ) {
                alert('with styles');

                var iab = window.open($(this).attr('href'), '_blank');

                iab.addEventListener('loadstop', function() {

                    // workaround to get code using jQuery.get
                    $.get('css/chat.window.css', function(cssData) {

                        alert(cssData);

                        // Once loaded, add css
                        iab.insertCSS( { code: cssData }, function() {

                            // And then JS
                            // $.get('js/chat.window.js', function(jsData) {

                            //     iab.executeScript( { code: jsData }, function() {
                                    alert("CSS and JS loaded");
                            //     });
                            // });
                        });

                    });
                });

                // iab.addEventListener('loadstop', function() {
                //     // Once loaded, add css
                //     // iab.insertCSS( { file: "../css/chat.window.css" } );
                //     iab.insertCSS( { file: basePath + "css/chat.window.css" }, function() {
                //         // And then JS
                //         iab.executeScript( { file: basePath + "js/" } );

                //     });
                // });
            } else {
                alert('without styles');
                window.open($(this).attr('href'), '_blank');
            }
        });
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};