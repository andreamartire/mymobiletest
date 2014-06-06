/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package io.cordova.hellocordova;

import java.io.File;

import android.content.Context;
import android.os.Bundle;
import org.apache.cordova.*;

public class HelloCordova extends CordovaActivity 
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
//        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index2.html");
    }
    
    @Override
    protected void onStop(){
       super.onStop();
    }

    //Fires after the OnStop() state
    @Override
    public void onDestroy() {
       super.onDestroy();
       try {
          trimCache(this);
       } catch (Exception e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
       }
    }

    public static void trimCache(Context context) {
       try {
          File dir = context.getCacheDir();
          if (dir != null && dir.isDirectory()) {
             deleteDir(dir);
          }
       } catch (Exception e) {
          // TODO: handle exception
       }
    }

    public static boolean deleteDir(File dir) {
       if (dir != null && dir.isDirectory()) {
          String[] children = dir.list();
          for (int i = 0; i < children.length; i++) {
             boolean success = deleteDir(new File(dir, children[i]));
             if (!success) {
                return false;
             }
          }
       }

       // The directory is now empty so delete it
       return dir.delete();
    }
}

