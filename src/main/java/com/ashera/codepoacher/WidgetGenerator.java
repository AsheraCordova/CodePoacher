package com.ashera.codepoacher;

import java.io.File;
import java.io.FileReader;
import java.util.Properties;

import com.ashera.codegen.CodeGenFromHtml;

public class WidgetGenerator {
	public static void main(String[] args) throws Exception {
		Properties properties = new Properties();
		properties.load(new FileReader(new File("config.properties")));
		String pathname = properties.getProperty("baseDir") + "/" + properties.getProperty("name") + "/";
		CodeGenFromHtml.generateCode(pathname);
	}
}
