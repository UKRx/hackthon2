package com.starterprojectreactnative;

import com.reactnativenavigation.controllers.SplashActivity;

//SplashLayout
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;


public class MainActivity extends SplashActivity {

    //SplashLayout
    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        TextView textView = new TextView(this);
        TextView textView2 = new TextView(this);

        view.setBackgroundColor(Color.parseColor("#16d8ef"));
        view.setGravity(Gravity.CENTER);

        textView.setTextColor(Color.parseColor("#FFFFFF"));
        textView.setText("Good Space");
        textView.setGravity(Gravity.CENTER);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

        view.addView(textView);
        return view;
    }

}
