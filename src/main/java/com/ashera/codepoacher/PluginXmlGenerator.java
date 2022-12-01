package com.ashera.codepoacher;

import java.io.File;
import java.io.FileReader;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import com.ashera.codegen.JumboPluginGenerator;
import com.ashera.codegen.PluginPathGen;

public class PluginXmlGenerator {
	public static void main(String[] args) throws Exception{
		String projectBaseDir = System.getProperty("baseDir");
		if (projectBaseDir == null) {
			throw new RuntimeException("Please define system env baseDir");
		}
		Properties properties = new Properties();
		properties.load(new FileReader(new File(projectBaseDir + "/codepoacher/config.properties")));
		String name = properties.getProperty("name");
		String layoutName = "../" + name + "/";

		List<String> pathWithDirAndPrefixes = new java.util.ArrayList<>(Arrays.asList(new String []{
				layoutName + "android/src:src::",
				layoutName + "android/tsc:tsc::",
				layoutName + "android/res:res::",
				layoutName + "browser/src:src::",
				layoutName + "browser/tsc:tsc::",
				layoutName + "browser/res:res::",
				layoutName + "swt/src:src::",
				layoutName + "swt/tsc:tsc::",
				layoutName + "swt/res:res::",
				layoutName + "ios/ios/src:ios::",
				layoutName + "ios/tsc:tsc::",
				layoutName + "ios/res:res::"
		}));
		PluginPathGen.generatePluginXml(pathWithDirAndPrefixes);
		JumboPluginGenerator.createPluginXml(new File(projectBaseDir));
	}
}
